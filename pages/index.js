import React from "react";
import ArtPiecesList from "@/components/ArtPiecesList";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Gallery 🎨</h1>
      <ArtPiecesList />
    </main>
  );
}
