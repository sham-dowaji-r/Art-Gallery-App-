import React from "react";
import ArtPiecesCard from "@/components/ArtPiecesCard";
import useArtPieces from "@/hooks/useArtPieces";
import useStore from "@/components/store"; // ✅ استيراد Zustand

const Favorites = () => {
  const { data: artPieces, isLoading, error } = useArtPieces();
  const favorites = useStore((state) => state.favorites); // ✅ جلب المفضلات من Zustand

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load art pieces.</p>;

  // ✅ فلترة القطع المفضلة من البيانات
  const favoritePieces = artPieces.filter((piece) =>
    favorites.includes(piece.slug)
  );

  return (
    <div>
      <h1>Your Favorite Art Pieces</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {favoritePieces.length === 0 ? (
          <p>You don’t have any favorite art pieces yet.</p>
        ) : (
          favoritePieces.map((piece) => (
            <li key={piece.slug}>
              <ArtPiecesCard
                imageUrl={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                slug={piece.slug}
                // ✅ ما في داعي تمرر isFavorite أو toggleFavorite
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Favorites;
