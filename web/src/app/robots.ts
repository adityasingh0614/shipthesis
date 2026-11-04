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
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-User",
          "PerplexityBot",
          "Google-Extended",
          "meta-externalagent",
          "Bytespider",
          "Bingbot",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://www.shipthesis.com/sitemap.xml",
  };
}

