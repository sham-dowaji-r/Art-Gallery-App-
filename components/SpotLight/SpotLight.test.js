import { render, screen } from "@testing-library/react";
import SpotLight from ".";

import "@testing-library/jest-dom";

//  mock للهوك يلي بيجيب البيانات
jest.mock("../../hooks/useArtPieces", () => () => ({
  data: [
    {
      slug: "sunset",
      name: "Sunset",
      artist: "John Doe",
      imageSource: "https://example-apis.vercel.app/assets/art/sunset.jpg",
    },
  ],
  isLoading: false,
  error: null,
}));

test("renders spotlight piece correctly", () => {
  render(<SpotLight favorites={["sunset"]} toggleFavorite={() => {}} />);

  expect(screen.getByText(/Your SpotLight Piece/i)).toBeInTheDocument();
  expect(screen.getByText("Sunset")).toBeInTheDocument();
  expect(screen.getByText("By John Doe")).toBeInTheDocument();

  const image = screen.getByAltText("Sunset");
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", expect.stringContaining("sunset.jpg"));
});
