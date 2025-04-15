import React from "react";
import getRandomArtPiece from "@/utils/getRandomArtPiece";
import useArtPieces from "@/hooks/useArtPieces";
import Link from "next/link";

const SpotLight = ({ slug }) => {
  const { data, error, isLoading } = useArtPieces();
  if (isLoading) return <p>Loading The Pieces...</p>;
  if (error) return <p>Faild To Load The Data</p>;

  const randomPiece = getRandomArtPiece(data);

  if (!randomPiece) return <p>No Art Pieces Available.</p>;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh", // حتى يطلع كلشي بالنص تقريباً
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "1rem" }}>Your SpotLight Pieces ✨</h2>
      <Link
        href={`/art/${randomPiece.slug}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={randomPiece.imageSource}
          alt={randomPiece.name}
          style={{
            width: "100%",
            maxWidth: 400,
            borderRadius: 12,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        />
      </Link>
      <p style={{ marginTop: "1rem" }}>By {randomPiece.artist}</p>
    </div>
  );
};

export default SpotLight;
