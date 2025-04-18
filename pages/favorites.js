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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem 1rem",
        minHeight: "100vh",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>
        Your Favorite Art Pieces
      </h1>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexWrap: "wrap", // ✅ يخلي البطاقات تلف جنب بعض
          justifyContent: "center", // ✅ يخليهم بالنص
          gap: "2rem", // ✅ مسافة بين البطاقات
          width: "100%", // ✅ يغطي عرض الصفحة
        }}
      >
        {favoritePieces.length === 0 ? (
          <p>You don’t have any favorite art pieces yet.</p>
        ) : (
          favoritePieces.map((piece) => (
            <li
              key={piece.slug}
              style={{
                flex: "0 1 300px", // ✅ كل بطاقة حوالي 300px
                display: "flex",
                justifyContent: "center",
              }}
            >
              <ArtPiecesCard
                imageUrl={piece.imageSource}
                title={piece.name}
                artist={piece.artist}
                slug={piece.slug}
              />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Favorites;
