"use client";
import React from "react";

export default function GoogleAd1({ slot }: { slot: string }) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
          <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-8480200911703454"
            data-ad-slot="${slot}"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
          <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
          </script>`,
      }}
    />
  );
}
