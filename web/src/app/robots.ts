import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-User",
          "PerplexityBot",
          "Google-Extended",
          "meta-externalagent",
          "Bytespider",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.shipthesis.com/sitemap.xml",
  };
}

