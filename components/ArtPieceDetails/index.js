import React from "react";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import useStore from "../store";

const ArtPieceDetails = ({ piece }) => {
  // ✅ استخدام Zustand
  const favorites = useStore((state) => state.favorites);
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const comments = useStore((state) => state.comments);
  const saveComment = useStore((state) => state.saveComment);

  const isFavorite = favorites.includes(piece.slug);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem 6rem", // Bottom padding to avoid navbar overlap
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* ✅ الصورة وزر القلب */}
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

      {/* ✅ المعلومات والتفاصيل */}
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

        {/* ✅ عرض الألوان */}
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
              />
            ))}
          </div>
        ) : (
          <p>No color data available</p>
        )}

        {/* ✅ مربع التعليق */}
        <div style={{ marginTop: "1.5rem" }}>
          <label htmlFor="comment">Your Comment:</label>
          <textarea
            id="comment"
            value={comments?.[piece.slug] || ""}
            onChange={(e) => saveComment(piece.slug, e.target.value)}
            placeholder="Write your thoughts here..."
            style={{
              width: "100%",
              minHeight: "80px",
              marginTop: "0.5rem",
              padding: "0.5rem",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontFamily: "inherit",
            }}
          />
        </div>

        {/* ✅ زر الرجوع للغاليري */}
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
