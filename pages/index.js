import React from "react";

import SpotLight from "@/components/SpotLight";

export default function HomePage({ favorites, toggleFavorite }) {
  return (
    <main style={{ padding: "2rem" }}>
      <SpotLight favorites={favorites} toggleFavorite={toggleFavorite} />
    </main>
  );
}
