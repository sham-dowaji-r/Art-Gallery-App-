import React, { useEffect, useState } from "react";
import useArtPieces from "@/hooks/useArtPieces";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
import getRandomArtPiece from "@/utils/getRandomArtPiece";
import Image from "next/image";
import useStore from "../store"; // ✅ استيراد Zustand
import styles from "./SpotLight.module.css";

const SpotLight = () => {
  const { data, error, isLoading } = useArtPieces();
  const [randomPiece, setRandomPiece] = useState(null);

  // ✅ من Zustand
  const favorites = useStore((state) => state.favorites);
  const toggleFavorite = useStore((state) => state.toggleFavorite);

  // ✅ اختيار قطعة عشوائية عند أول تحميل
  useEffect(() => {
    if (data && data.length > 0 && !randomPiece) {
      const random = getRandomArtPiece(data);
      setRandomPiece(random);
    }
  }, [data, randomPiece]);

  if (isLoading) return <p>Loading The Pieces...</p>;
  if (error) return <p>Failed To Load The Data</p>;
  if (!randomPiece) return <p>No Art Pieces Available.</p>;

  const isFavorite =
    Array.isArray(favorites) && favorites.includes(randomPiece.slug);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Your SpotLight Pieces ✨</h2>

      <div className={styles.imageWrapper}>
        <Link href={`/art/${randomPiece.slug}`}>
          <Image
            src={randomPiece.imageSource}
            alt={randomPiece.name}
            width={300}
            height={200}
            priority
            className={styles.image}
          />
        </Link>
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={() => toggleFavorite(randomPiece.slug)}
        />
      </div>

      <h3>{randomPiece.name}</h3>
      <p>By {randomPiece.artist}</p>
    </div>
  );
};

export default SpotLight;
