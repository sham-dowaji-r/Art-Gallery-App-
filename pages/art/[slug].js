import { useRouter } from "next/router";
import useArtPieces from "@/hooks/useArtPieces";
import ArtPieceDetails from "@/components/ArtPieceDetails";
import useStore from "@/components/store"; // ✅ استيراد Zustand

export default function ArtPieceDetailsPage() {
  const { data, error, isLoading } = useArtPieces();
  const router = useRouter();
  const { slug } = router.query;

  // ✅ Zustand state
  const favorites = useStore((state) => state.favorites);

  if (isLoading) return <p>Loading The Pieces...</p>;
  if (error) return <p>Failed To Load The Data</p>;

  const artPiece = data.find((piece) => piece.slug === slug);
  if (!artPiece) return <p>Art Piece Not Found.</p>;

  return <ArtPieceDetails piece={artPiece} />;
}
