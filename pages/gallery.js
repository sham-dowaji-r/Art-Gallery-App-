import React from "react";
import ArtPiecesList from "@/components/ArtPiecesList";

export default function Gallery({ data, favorites, toggleFavorite }) {
  return (
    <main style={{ padding: "2rem" }}>
      <ArtPiecesList
        data={data}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
    </main>
  );
}
