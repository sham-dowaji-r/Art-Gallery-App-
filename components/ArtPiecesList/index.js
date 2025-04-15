import React from "react";
import ArtPiecesCard from "../ArtPiecesCard";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ArtPiecesList = () => {
  const { data, error, isLoading } = useSWR(
    "https://example-apis.vercel.app/api/art",
    fetcher
  );
  if (isLoading) return <p>Loading The Pieces...</p>;
  if (error) return <p>Faild To Load The Data</p>;
  return (
    <div>
      <ul>
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
