import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ship Thesis",
    short_name: "Ship Thesis",
    description:
      "We build mobile apps and SaaS MVPs for founders. A working build on your phone every week, fixed-scope milestones, and code you own.",
    start_url: "/",
    display: "standalone",
    background_color: "#0F1813",
    theme_color: "#0F1813",
    icons: [
      {
        src: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

