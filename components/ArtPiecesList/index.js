import React from "react";
import ArtPiecesCard from "../ArtPiecesCard";
import useArtPieces from "@/hooks/useArtPieces";

//const fetcher = (url) => fetch(url).then((res) => res.json());

const ArtPiecesList = () => {
  const { data, error, isLoading } = useArtPieces();
  if (isLoading) return <p>Loading The Pieces...</p>;
  if (error) return <p>Faild To Load The Data</p>;
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        <li>
          {data.map((piece) => (
            <ArtPiecesCard
              key={piece.slug}
              imageUrl={piece.imageSource}
              title={piece.name}
              artist={piece.artist}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};
export default ArtPiecesList;
