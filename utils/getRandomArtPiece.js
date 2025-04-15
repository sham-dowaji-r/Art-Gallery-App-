export default function getRandomArtPiece(artPieces) {
  if (!Array.isArray(artPieces) || artPieces.lenght === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * artPieces.length);
  return artPieces[randomIndex];
}
