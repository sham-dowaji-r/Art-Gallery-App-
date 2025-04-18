import { render, screen } from "@testing-library/react";
import ArtPieceDetails from ".";
import "@testing-library/jest-dom";

// 👇 نعمل Mock لـ useRouter تبع Next.js
jest.mock("next/router", () => ({
  useRouter: () => ({
    back: jest.fn(), // لأنك عامل بالصفحة زر Go Back
  }),
}));

describe("ArtPieceDetails", () => {
  test("renders all piece details correctly", () => {
    const mockPiece = {
      slug: "ocean-view",
      name: "Ocean View",
      artist: "Jane Doe",
      year: "2021",
      genre: "Landscape",
      colors: ["#00ADEF", "#004080"],
      imageSource: "https://example.com/ocean.jpg",
    };

    render(<ArtPieceDetails piece={mockPiece} />);

    expect(screen.getByText(mockPiece.name)).toBeInTheDocument();
    expect(screen.getByText(mockPiece.artist)).toBeInTheDocument();
    expect(screen.getByText(mockPiece.year)).toBeInTheDocument();
    expect(screen.getByText(mockPiece.genre)).toBeInTheDocument();
  });
});
