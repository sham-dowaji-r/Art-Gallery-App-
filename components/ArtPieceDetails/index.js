import Link from "next/link";
import React from "react";
import FavoriteButton from "../FavoriteButton";
import Image from "next/image";

const ArtPieceDetails = ({ piece, isFavorite, toggleFavorite }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem 6rem", // آخر رقم هو bottom padding حتى ما تتغطى بالمينيو
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      <div style={{ position: "relative", width: "100%", maxWidth: 400 }}>
        <Image
          src={piece.imageSource}
          alt={piece.name}
          width={400}
          height={300}
          priority
          style={{
            width: "100%",
            height: "auto",
            borderRadius: 12,
            objectFit: "cover",
          }}
        />
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => toggleFavorite(piece.slug)}
        />
      </div>
      <div
        style={{
          width: "100%",
          maxWidth: 400,
          backgroundColor: "#f8f8f8",
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          textAlign: "left",
        }}
      >
        <h2>{piece.name}</h2>
        <p>{piece.artist}</p>
        <p>{piece.year}</p>
        <p>{piece.genre}</p>
        {Array.isArray(piece.colors) && piece.colors.length > 0 ? (
          <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
            {piece.colors.map((color) => (
              <div
                key={color}
                title={color}
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "10%",
                  backgroundColor: color,
                  border: "1px solid #ccc",
                }}
              ></div>
            ))}
          </div>
        ) : (
          <p>No color data available</p>
        )}
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
            Back to Gallery
          </button>
        </Link>
      </div>
    </div>
  );
};
export default ArtPieceDetails;
