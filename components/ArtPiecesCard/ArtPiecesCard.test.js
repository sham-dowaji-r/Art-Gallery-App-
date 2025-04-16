import { render, screen, fireEvent } from "@testing-library/react";
import ArtPiecesCard from ".";
import "@testing-library/jest-dom";

const mockToggleFavorite = jest.fn();

// إنشاء بيانات وهمية لاختبار الكمبوننت
const mockProps = {
  imageUrl: "https://example.com/image.jpg", // رابط وهمي للصورة
  title: "Sunset in Venice", // عنوان العمل الفني
  artist: "Claude Monet", // اسم الفنان
  slug: "sunset-in-venice", // معرف القطعة
  isFavorite: true, // تحديد إنها مفضلة
  toggleFavorite: mockToggleFavorite, // نمرر الدالة المزيفة
};

describe("ArtPiecesCard", () => {
  // اختبار عرض البيانات الأساسية
  test("renders image, title and artist", () => {
    render(<ArtPiecesCard {...mockProps} />); // رسم الكمبوننت ببيانات وهمية

    // ✅ التحقق من وجود الصورة alt=title
    const image = screen.getByAltText(mockProps.title);
    expect(image).toBeInTheDocument(); // نتأكد إنها ظاهرة
    expect(image).toHaveAttribute("src", expect.stringContaining("image.jpg")); // وبتحوي رابط صحيح

    // ✅ التحقق من وجود العنوان واسم الفنان
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(`By ${mockProps.artist}`)).toBeInTheDocument();
  });

  // اختبار الضغط على زر القلب
  test("calls toggleFavorite when heart is clicked", () => {
    render(<ArtPiecesCard {...mockProps} />); // نرسم الكمبوننت

    // ✅ نحصل على زر القلب (لازم يكون فيه aria-label="Toggle Favorite")
    const heartButton = screen.getByRole("button", {
      name: /toggle favorite/i,
    });

    // ✅ نحاكي ضغطة على زر القلب
    fireEvent.click(heartButton);

    // ✅ نتأكد إن الدالة نادت مرة وحدة
    expect(mockToggleFavorite).toHaveBeenCalledTimes(1);

    // ✅ ونعرف إنها نادت مع الـ slug تبع القطعة
    expect(mockToggleFavorite).toHaveBeenCalledWith(mockProps.slug);
  });

  // اختبار الشكل لما القطعة مفضلة
  test("applies crimson border if favorite", () => {
    const { container } = render(<ArtPiecesCard {...mockProps} />); // نرسم الكرت

    // ✅ نتحقق من وجود إطار أحمر
    expect(container.firstChild).toHaveStyle("border: 3px solid crimson");
  });

  // اختبار الشكل لما القطعة مو مفضلة
  test("applies default border if not favorite", () => {
    const { container } = render(
      <ArtPiecesCard {...mockProps} isFavorite={false} /> // نجرب بحالة غير مفضلة
    );

    // ✅ نتحقق من وجود الإطار الرمادي الافتراضي
    expect(container.firstChild).toHaveStyle("border: 1px solid #ddd");
  });
});
