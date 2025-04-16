import { render, screen } from "@testing-library/react";
import Navigation from ".";
import "@testing-library/jest-dom";

// 📌 نغلف الكمبوننت بمزود رواتر وهمي لأنه فيه <Link>
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

describe("Navigation", () => {
  test("renders all navigation links", () => {
    render(<Navigation />, { wrapper: MemoryRouterProvider });

    // ✅ التحقق من وجود روابط التنقل الثلاثة
    expect(screen.getByText("SpotLight")).toBeInTheDocument();
    expect(screen.getByText("Art Pieces🎨")).toBeInTheDocument();
    expect(screen.getByText("Favorites ❤️")).toBeInTheDocument();
  });

  test("links point to correct routes", () => {
    render(<Navigation />, { wrapper: MemoryRouterProvider });

    // ✅ التحقق من المسارات لكل رابط
    expect(screen.getByText("SpotLight").closest("a")).toHaveAttribute(
      "href",
      "/"
    );
    expect(screen.getByText("Art Pieces🎨").closest("a")).toHaveAttribute(
      "href",
      "/gallery"
    );
    expect(screen.getByText("Favorites ❤️").closest("a")).toHaveAttribute(
      "href",
      "/favorites"
    );
  });
});
