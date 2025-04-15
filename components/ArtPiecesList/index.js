import React from "react";
import ArtPiecesCard from "../ArtPiecesCard";
import useArtPieces from "@/hooks/useArtPieces";

//const fetcher = (url) => fetch(url).then((res) => res.json());

const ArtPiecesList = () => {
  const { data, error, isLoading } = useArtPieces();
  if (isLoading) return <p>Loading The Pieces...</p>;
  if (error) return <p>Faild To Load The Data</p>;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center", // center horizontally
        alignItems: "center", // center vertically
        flexDirection: "column",
        minHeight: "100vh", // take full height of screen
      }}
    >
      <h1>Gallery 🎨</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.map((piece) => (
          <li key={piece.slug} style={{ marginBottom: "1rem" }}>
            <ArtPiecesCard
              imageUrl={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ArtPiecesList;
