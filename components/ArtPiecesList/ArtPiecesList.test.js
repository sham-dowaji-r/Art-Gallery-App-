import { render, screen } from "@testing-library/react";
import ArtPiecesList from ".";
import "@testing-library/jest-dom";

// 📌 بنعمل mock للـ hook يلي بجيب البيانات
jest.mock("@/hooks/useArtPieces");

// نجيب النسخة القابلة للتعديل من الهوك
import useArtPieces from "@/hooks/useArtPieces";

// بيانات وهمية لقطعة فنية
const mockData = [
  {
    slug: "blue-ocean",
    name: "Blue Ocean",
    artist: "A. Painter",
    imageSource: "https://example.com/ocean.jpg",
  },
];

describe("ArtPiecesList", () => {
  // 🧪 اختبار حالة التحميل (loading)
  test("shows loading state", () => {
    useArtPieces.mockReturnValue({
      data: [],
      isLoading: true,
      error: null,
    });

    render(<ArtPiecesList favorites={[]} toggleFavorite={() => {}} />);

    expect(screen.getByText(/loading the pieces/i)).toBeInTheDocument();
  });

  // 🧪 اختبار حالة الخطأ (error)
  test("shows error state", () => {
    useArtPieces.mockReturnValue({
      data: [],
      isLoading: false,
      error: true,
    });

    render(<ArtPiecesList favorites={[]} toggleFavorite={() => {}} />);

    expect(screen.getByText(/failed to load the data/i)).toBeInTheDocument();
  });

  // 🧪 اختبار الحالة الطبيعية عند وجود بيانات
  test("renders list of art pieces", () => {
    useArtPieces.mockReturnValue({
      data: mockData,
      isLoading: false,
      error: null,
    });

    render(
      <ArtPiecesList favorites={["blue-ocean"]} toggleFavorite={() => {}} />
    );

    // ✅ التحقق من عنوان الصفحة
    expect(screen.getByText(/gallery/i)).toBeInTheDocument();

    // ✅ التحقق من وجود اسم العمل
    expect(screen.getByText("Blue Ocean")).toBeInTheDocument();

    // ✅ التحقق من وجود اسم الفنان
    expect(screen.getByText("By A. Painter")).toBeInTheDocument();
  });
});
