import React from "react";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
import Image from "next/image";

const ArtPiecesCard = ({
  imageUrl,
  title,
  artist,
  slug,
  isFavorite,
  toggleFavorite,
}) => {
  return (
    <div
      style={{
        position: "relative",
        width: "300px",
        borderRadius: "12px",
        overflow: "hidden",
        border: isFavorite ? "3px solid crimson" : "1px solid #ddd",
        boxShadow: isFavorite
          ? "0 0 15px rgba(220, 20, 60, 0.4)"
          : "0 4px 12px rgba(0,0,0,0.1)",
        marginBottom: "2rem",
      }}
    >
      {/* الصورة + زر القلب */}
      <div style={{ position: "relative" }}>
        <Link href={`/art/${slug}`}>
          <Image
            src={imageUrl}
            alt={title}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </Link>

        {/* زر القلب يتموضع داخل الصورة بأعلى اليمين */}
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => toggleFavorite(slug)}
        />
      </div>

      <div style={{ padding: "1rem" }}>
        <h3 style={{ margin: "0.5rem 0" }}>{title}</h3>
        <p style={{ margin: "0.3rem 0", color: "#666" }}>By {artist}</p>
      </div>
    </div>
  );
};

export default ArtPiecesCard;
