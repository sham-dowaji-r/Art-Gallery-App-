import React from "react";
import Image from "next/image";
import FavoriteButton from "../FavoriteButton";
import useStore from "../store";
import CommentForm from "../CommentForm";
import CommentList from "../CommentList";
import styles from "./ArtPieceDetails.module.css";
import { useRouter } from "next/router"; // ✅ استيراد router
import { useEffect } from "react";
import ColorPalette from "../ColorPalette";
import cardStyles from "@/components/ArtPiecesCard/ArtPiecesCard.module.css";

const ArtPieceDetails = ({ piece }) => {
  const router = useRouter();

  const backgroundGradient = piece.colors
    ? `linear-gradient(to top, ${piece.colors.join(", ")})`
    : "#fff"; // fallback إذا ما في ألوان
  useEffect(() => {
    document.body.style.background = backgroundGradient;

    return () => {
      document.body.style.background = "";
    };
  }, [backgroundGradient]);
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
      <div
        className={`${cardStyles.card} ${
          isFavorite ? cardStyles.cardFavorite : cardStyles.cardDefault
        }`}
      >
        <Image
          src={piece.imageSource}
          alt={piece.name}
          width={400}
          height={300}
          priority
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain", // 👈 هي أهم شي هون
          }}
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

        <ColorPalette colors={piece.colors} />
        <h3 style={{ marginTop: "2rem" }}>Comments</h3>
        <CommentList comments={pieceComments} />
        <CommentForm slug={piece.slug} />

        <button onClick={() => router.back()} className={styles.backButton}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default ArtPieceDetails;
