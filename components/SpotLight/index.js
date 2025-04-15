import React, { useEffect, useState } from "react";
import useArtPieces from "@/hooks/useArtPieces";
import FavoriteButton from "../FavoriteButton";
import Link from "next/link";
import getRandomArtPiece from "@/utils/getRandomArtPiece"; // إذا عندك فانكشن هيك
import Image from "next/image";

const SpotLight = ({ favorites, toggleFavorite }) => {
  const { data, error, isLoading } = useArtPieces();
  const [randomPiece, setRandomPiece] = useState(null);

  useEffect(() => {
    if (data && data.length > 0 && !randomPiece) {
      const random = getRandomArtPiece(data);
      setRandomPiece(random);
    }
  }, [data, randomPiece]);

  if (isLoading) return <p>Loading The Pieces...</p>;
  if (error) return <p>Faild To Load The Data</p>;
  if (!randomPiece) return <p>No Art Pieces Available.</p>;

  const isFavorite = favorites.includes(randomPiece.slug);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh", // حتى يطلع كلشي بالنص تقريباً
        textAlign: "center",
        position: "relative",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Your SpotLight Pieces ✨</h2>
      <div style={{ position: "relative" }}>
        <Link href={`/art/${randomPiece.slug}`}>
          <Image
            src={randomPiece.imageSource}
            alt={randomPiece.name}
            fill
            style={{ objectFit: "cover", borderRadius: "12px" }}
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
