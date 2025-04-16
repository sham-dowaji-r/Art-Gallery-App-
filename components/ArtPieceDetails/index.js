import React from "react";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import useStore from "../store";
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";
import styles from "./ArtPieceDetails.module.css";

const ArtPieceDetails = ({ piece }) => {
  // ✅ استخدام Zustand
  const favorites = useStore((state) => state.favorites);
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const comments = useStore((state) => state.comments);
  const pieceComments = Array.isArray(comments?.[piece.slug])
    ? comments[piece.slug]
    : [];

  const isFavorite = favorites.includes(piece.slug);

  return (
    <div className={styles.wrapper}>
      <div className={styles.imageWrapper}>
        <Image
          src={piece.imageSource}
          alt={piece.name}
          width={400}
          height={300}
          priority
        />
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => toggleFavorite(piece.slug)}
        />
      </div>

      <div className={styles.detailsBox}>
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
                className={styles.colorSwatch}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        ) : (
          <p>No color data available</p>
        )}

        <h3 style={{ marginTop: "2rem" }}>Comments</h3>
        <CommentList comments={pieceComments} />
        <CommentForm slug={piece.slug} />

        <Link href="/gallery">
          <button className={styles.backButton}>Back to Gallery</button>
        </Link>
      </div>
    </div>
  );
};

export default ArtPieceDetails;
