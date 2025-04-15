import React from "react";
import Link from "next/link";

import SpotLight from "@/components/SpotLight";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <SpotLight />
      <Link href="/gallery">
        <button
          style={{
            marginTop: "2rem",
            padding: "0.5rem 1rem",
            fontSize: "1rem",
          }}
        >
          All Art Pieces🎨
        </button>
      </Link>
    </main>
  );
}
