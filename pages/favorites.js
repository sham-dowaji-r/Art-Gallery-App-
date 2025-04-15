import React from "react";
import ArtPiecesCard from "@/components/ArtPiecesCard";
import useArtPieces from "@/hooks/useArtPieces";

const Favorites = ({ favorites, toggleFavorite }) => {
  const { data: artPieces, isLoading, error } = useArtPieces();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load art pieces.</p>;

  // فلترة القطع الفنية المفضلة
  const favoritePieces = artPieces.filter((piece) =>
    favorites.includes(piece.slug)
  );

  return (
    <div>
      <h1>Your Favorite Art Pieces</h1>
      <ul style={{ listStyle: "none" }}>
        {favoritePieces.length === 0 ? (
          <p>You don't have any favorite art pieces yet.</p>
        ) : (
          favoritePieces.map((piece) => (
            <li key={piece.slug}>
              <ArtPiecesCard
                imageUrl={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                slug={piece.slug}
                isFavorite={favorites.includes(piece.slug)}
                toggleFavorite={toggleFavorite} // تمرير toggleFavorite هنا
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Favorites;
