import { render, screen } from "@testing-library/react";
import ArtPieceDetails from ".";
import "@testing-library/jest-dom";

// دالة وهمية لتفعيل المفضلة
const mockToggleFavorite = jest.fn();

// بيانات وهمية لقطعة فنية
const mockPiece = {
  slug: "deep-blue",
  name: "Deep Blue",
  artist: "Ocean Master",
  year: 2021,
  genre: "Abstract",
  imageSource: "https://example.com/blue.jpg",
  colors: ["#123456", "#abcdef"],
};

describe("ArtPieceDetails", () => {
  test("renders all piece details correctly", () => {
    render(
      <ArtPieceDetails
        piece={mockPiece}
        isFavorite={true}
        toggleFavorite={mockToggleFavorite}
      />
    );

    // ✅ التحقق من عرض الصورة alt = name
    const image = screen.getByAltText("Deep Blue");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("blue.jpg"));

    // ✅ اسم العمل
    expect(screen.getByText("Deep Blue")).toBeInTheDocument();

    // ✅ اسم الفنان
    expect(screen.getByText("Ocean Master")).toBeInTheDocument();

    // ✅ السنة
    expect(screen.getByText("2021")).toBeInTheDocument();

    // ✅ النوع/التصنيف
    expect(screen.getByText("Abstract")).toBeInTheDocument();

    // ✅ الألوان (نشيك على عددهم)
    const colorSquares = screen.getAllByTitle(/#(?:[0-9a-fA-F]{6})/);
    expect(colorSquares.length).toBe(mockPiece.colors.length);

    // ✅ زر الرجوع
    expect(
      screen.getByRole("button", { name: /back to gallery/i })
    ).toBeInTheDocument();
  });
});
