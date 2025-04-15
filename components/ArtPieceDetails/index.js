import Link from "next/link";
import React from "react";
const ArtPieceDetails = ({ piece }) => {
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
      <img
        src={piece.imageSource}
        alt={piece.name}
        style={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 12,
          marginBottom: "1rem",
        }}
      />
      <h2>{piece.name}</h2>
      <p>{piece.artist}</p>
      <p>{piece.year}</p>
      <p>{piece.genre}</p>
      <p>{piece.colors}</p>

      <Link href="/gallery">
        <button
          style={{
            marginTop: "2rem",
            padding: "0.6rem 1.5rem",
            backgroundColor: "#222",
            color: "white",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
          }}
        >
          ← Back to Gallery
        </button>
      </Link>
    </div>
  );
};
export default ArtPieceDetails;
