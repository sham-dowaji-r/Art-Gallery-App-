import React from "react";
import ArtPiecesCard from "../ArtPiecesCard";
import useArtPieces from "@/hooks/useArtPieces";
import styles from "./ArtPiecesList.module.css";

const ArtPiecesList = () => {
  const { data, error, isLoading } = useArtPieces();

  if (isLoading)
    return <p className={styles.container}>Loading The Pieces...</p>;
  if (error) return <p className={styles.container}>Failed To Load The Data</p>;

  return (
    <div className={styles.container}>
      <h1>Gallery 🎨</h1>
      <ul className={styles.list}>
        {data.map((piece) => (
          <li key={piece.slug} className={styles.listItem}>
            <ArtPiecesCard
              imageUrl={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
              slug={piece.slug}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArtPiecesList;
