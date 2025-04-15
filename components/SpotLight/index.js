import React from "react";
import getRandomArtPiece from "@/utils/getRandomArtPiece";
import useArtPieces from "@/hooks/useArtPieces";

const SpotLight = () => {
  const { data, error, isLoading } = useArtPieces();
  if (isLoading) return <p>Loading The Pieces...</p>;
  if (error) return <p>Faild To Load The Data</p>;

  const randomPiece = getRandomArtPiece(data);

  if (!randomPiece) return <p>No Art Pieces Available.</p>;

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Your SpotLight Pieces ✨</h2>
      <img
        src={randomPiece.imageSource}
        alt={randomPiece.name}
        style={{
          width: "100%",
          maxWidth: "50%",
          borderRadius: 10,
          alignItems: "center",
        }}
      />
      <h3 style={{ marginTop: "1rem", textAlign: "center" }}>
        By {randomPiece.artist}
      </h3>
    </div>
  );
};

export default SpotLight;
