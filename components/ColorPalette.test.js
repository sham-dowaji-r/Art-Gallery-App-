import { render, screen } from "@testing-library/react";
import ColorPalette from "./ColorPalette";
import "@testing-library/jest-dom";

describe("ColorPalette", () => {
  test("shows 'No colors available' if no colors passed", () => {
    render(<ColorPalette colors={[]} />);
    expect(screen.getByText(/no colors available/i)).toBeInTheDocument();
  });

  test("renders a list of color swatches", () => {
    const mockColors = ["#FF0000", "#00FF00", "#0000FF"]; // أحمر، أخضر، أزرق

    render(<ColorPalette colors={mockColors} />);

    // نتأكد إنه عم يعرض عدد صحيح من السواتشز
    const colorSwatches = screen.getAllByTitle(/#/);
    expect(colorSwatches.length).toBe(3);
  });
});
