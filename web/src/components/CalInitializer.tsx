"use client";

import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";

export function CalInitializer() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        theme: "light",
        styles: { branding: { brandColor: "#0a7f55" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return null;
}
