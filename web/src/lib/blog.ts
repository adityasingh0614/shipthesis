import fs from "fs";
import path from "path";
import { BOOKING_URL } from "@/lib/booking";
import {
  type FaqItem,
  type TocItem,
  type BlogPostMeta,
  BLOG_POSTS_METADATA,
  UPCOMING_POSTS_METADATA,
  getAllPosts,
} from "./blog-data";

export type { FaqItem, TocItem, BlogPostMeta };
export { BLOG_POSTS_METADATA, UPCOMING_POSTS_METADATA, getAllPosts };

export interface BlogPost extends BlogPostMeta {
  contentHtml: string;
  faqs: FaqItem[];
  toc: TocItem[];
  rawMarkdown: string;
}

function findMarkdownFilePath(slug: string): string | null {
  const possiblePaths = [
    path.join(process.cwd(), "content", "blog", `${slug}.mdx`),
    path.join(process.cwd(), "..", "content", "blog", `${slug}.mdx`),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(/*turbopackIgnore: true*/ p)) {
      return p;
    }
  }
  return null;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const allKnown = [...BLOG_POSTS_METADATA, ...UPCOMING_POSTS_METADATA];
  const meta = allKnown.find((p) => p.slug === slug);
  if (!meta) return null;

  const filePath = findMarkdownFilePath(slug);
  if (!filePath) {
    return null;
  }

  let text = fs.readFileSync(/*turbopackIgnore: true*/ filePath, "utf-8");

  // Normalize CRLF to LF
  text = text.replace(/\r\n/g, "\n");

  // Strip internal claim verification tags and any whitespace preceding them
  text = text.replace(/\s*\{\{c:[A-Za-z0-9_-]+\}\}/g, "");
  // Clean up any stray spaces before punctuation marks (e.g. "milestones ." -> "milestones.")
  text = text.replace(/\s+([.,;:!?])/g, "$1");

  // Replace central booking URL token
  text = text.replace(/\{\{BOOKING_URL\}\}/g, BOOKING_URL);

  // Extract FAQs
  const faqs: FaqItem[] = [];
  const faqMatch = text.match(
    /##\s+Frequently Asked Questions\s*\n+([\s\S]*?)(?=\n##\s|\n---|$)/
  );
  if (faqMatch) {
    const qMatches = Array.from(
      faqMatch[1].matchAll(/###\s+([^\n]+)\n+([\s\S]*?)(?=\n###|\n---|$)/g)
    );
    for (const match of qMatches) {
      const q = match[1].trim();
      const a = match[2].trim().replace(/\n+/g, " ");
      if (q && a) {
        faqs.push({ question: q, answer: a });
      }
    }
  }

  // Extract Table of Contents from H2 headings
  const toc: TocItem[] = [];
  const h2Matches = Array.from(text.matchAll(/^##\s+([^\n]+)$/gm));
  h2Matches.forEach((match, index) => {
    const raw = match[1].trim();
    const id = slugifyHeading(raw);
    const num = String(index + 1).padStart(2, "0");
    toc.push({
      id,
      num,
      title: raw,
    });
  });

  const contentHtml = parseMarkdownToHtml(text);

  return {
    ...meta,
    contentHtml,
    faqs,
    toc,
    rawMarkdown: text,
  };
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Lightweight deterministic markdown to HTML parser.
 * Handles headings, paragraphs, lists, tables, blockquotes, code, and links.
 */
function parseMarkdownToHtml(markdown: string): string {
  // Strip top-level H1 (handled by page header)
  const cleaned = markdown.replace(/^#\s+[^\n]+\n+/, "");

  const lines = cleaned.split("\n");
  const htmlParts: string[] = [];
  let inList: "ul" | "ol" | null = null;
  let inTable = false;
  let tableRows: string[][] = [];
  let inShortVersion = false;
  let inCodeBlock = false;
  let codeBlockLang = "";
  let codeBlockLines: string[] = [];

  const flushList = () => {
    if (inList) {
      htmlParts.push(`</${inList}>`);
      inList = null;
      if (inShortVersion) {
        htmlParts.push(`</div>`);
        inShortVersion = false;
      }
    }
  };

  const flushTable = () => {
    if (inTable && tableRows.length > 0) {
      const headerRow = tableRows[0];
      const bodyRows = tableRows.slice(1);
      let tableHtml = `<div class="tableWrapper"><table><thead><tr>`;
      for (const th of headerRow) {
        tableHtml += `<th>${inlineFormat(th)}</th>`;
      }
      tableHtml += `</tr></thead><tbody>`;
      for (const row of bodyRows) {
        tableHtml += `<tr>`;
        for (const td of row) {
          tableHtml += `<td>${inlineFormat(td)}</td>`;
        }
        tableHtml += `</tr>`;
      }
      tableHtml += `</tbody></table></div>`;
      htmlParts.push(tableHtml);
      inTable = false;
      tableRows = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    // Fenced Code Block
    if (line.startsWith("```")) {
      flushList();
      flushTable();
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeBlockLang = line.slice(3).trim();
        codeBlockLines = [];
      } else {
        inCodeBlock = false;
        const codeEscaped = escapeHtml(codeBlockLines.join("\n"));
        const langLabel = codeBlockLang ? codeBlockLang.toUpperCase() : "CODE";
        htmlParts.push(
          `<div class="codeBlockWrapper"><div class="codeBlockHeader"><span class="codeBlockLang">${langLabel}</span></div><pre><code class="language-${codeBlockLang}">${codeEscaped}</code></pre></div>`
        );
        codeBlockLang = "";
        codeBlockLines = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockLines.push(rawLine);
      continue;
    }

    // Horizontal Rule
    if (line === "---") {
      flushList();
      flushTable();
      htmlParts.push("<hr />");
      continue;
    }

    // Table rows
    if (line.startsWith("|") && line.endsWith("|")) {
      flushList();
      // Skip separator lines like |---|---|
      if (/^\|(\s*[-:]+\s*\|)+$/.test(line)) {
        continue;
      }
      const cols = line
        .slice(1, -1)
        .split("|")
        .map((c) => c.trim());
      inTable = true;
      tableRows.push(cols);
      continue;
    } else if (inTable) {
      flushTable();
    }

    // Headings
    if (line.startsWith("### ")) {
      flushList();
      flushTable();
      const headingText = line.slice(4).trim();
      if (headingText.toLowerCase() === "the short version") {
        inShortVersion = true;
        htmlParts.push(
          `<div class="shortVersionBox"><div class="shortVersionHeader"><span class="shortVersionTag">EXECUTIVE SUMMARY</span><h3 class="shortVersionTitle">${inlineFormat(
            headingText
          )}</h3></div>`
        );
        continue;
      }
      htmlParts.push(`<h3>${inlineFormat(headingText)}</h3>`);
      continue;
    }
    if (line.startsWith("## ")) {
      flushList();
      flushTable();
      const rawHeading = line.slice(3).trim();
      const id = slugifyHeading(rawHeading);
      htmlParts.push(`<h2 id="${id}">${inlineFormat(rawHeading)}</h2>`);
      continue;
    }

    // Unordered list
    if (line.startsWith("* ") || line.startsWith("- ")) {
      flushTable();
      if (inList !== "ul") {
        flushList();
        inList = "ul";
        htmlParts.push("<ul>");
      }
      htmlParts.push(`<li>${inlineFormat(line.slice(2))}</li>`);
      continue;
    }

    // Ordered list
    const olMatch = line.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      flushTable();
      if (inList !== "ol") {
        flushList();
        inList = "ol";
        htmlParts.push("<ol>");
      }
      htmlParts.push(`<li>${inlineFormat(olMatch[1])}</li>`);
      continue;
    }

    // Non-list line
    if (inList) {
      flushList();
    }

    // Blockquote
    if (line.startsWith("> ")) {
      flushTable();
      htmlParts.push(`<blockquote>${inlineFormat(line.slice(2))}</blockquote>`);
      continue;
    }

    // Paragraph
    if (line.length > 0) {
      flushTable();
      htmlParts.push(`<p>${inlineFormat(line)}</p>`);
    }
  }

  flushList();
  flushTable();
  if (inCodeBlock) {
    const codeEscaped = escapeHtml(codeBlockLines.join("\n"));
    const langLabel = codeBlockLang ? codeBlockLang.toUpperCase() : "CODE";
    htmlParts.push(
      `<div class="codeBlockWrapper"><div class="codeBlockHeader"><span class="codeBlockLang">${langLabel}</span></div><pre><code class="language-${codeBlockLang}">${codeEscaped}</code></pre></div>`
    );
  }

  return htmlParts.join("\n");
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function inlineFormat(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, label, href) => {
      const isBooking = href.includes("cal.com");
      if (isBooking) {
        return `<a href="${href}" data-cal-link="shipthesis/20min" class="bookingTextLink">${label}</a>`;
      }
      return `<a href="${href}">${label}</a>`;
    });
}
