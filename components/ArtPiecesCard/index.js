import Link from "next/link";
import React from "react";

export default function ArtPiecesCard({ imageUrl, title, artist, slug }) {
  return (
    <Link
      href={`/art/${slug}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div>
        <img
          src={imageUrl}
          alt={title}
          style={{ width: "100%", maxWidth: 300, borderRadius: 8 }}
        />
        <h3 style={{ margin: "0.5rem 0 0.25rem" }}>{title}</h3>
        <h5 style={{ margin: "0.5rem 0 0.25rem", color: "purple" }}>
          By {artist}
        </h5>
      </div>
    </Link>
  );
}
