import React from "react";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
import Image from "next/image";
import useStore from "../store"; // ✅ استيراد Zustand store
import styles from "./ArtPiecesCard.module.css";

const ArtPiecesCard = ({ imageUrl, title, artist, slug }) => {
  // ✅ جلب البيانات من Zustand بدل props
  const favorites = useStore((state) => state.favorites);
  const toggleFavorite = useStore((state) => state.toggleFavorite);
  const isFavorite = favorites.includes(slug);

  return (
    <div
      className={`${styles.card} ${
        isFavorite ? styles.cardFavorite : styles.cardDefault
      }`}
    >
      <div className={styles.imageWrapper}>
        <Link href={`/art/${slug}`}>
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </Link>

        {/* ✅ الزر صار يشتغل مباشرة من Zustand */}
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => toggleFavorite(slug)}
        />
      </div>

      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.artist}>By {artist}</p>
      </div>
    </div>
  );
};

export default ArtPiecesCard;
