import { render, screen, fireEvent } from "@testing-library/react";
import ArtPiecesCard from ".";
import "@testing-library/jest-dom";
import useStore from "../store";

// ✅ ضبط Zustand قبل كل اختبار
beforeEach(() => {
  useStore.setState({
    favorites: ["sunset-in-venice"],
    toggleFavorite: jest.fn(),
  });
});

// ✅ بعد كل اختبار: إعادة ضبط Zustand
afterEach(() => {
  useStore.setState({ favorites: [], toggleFavorite: () => {} });
});

// بيانات الاختبار
const mockProps = {
  imageUrl: "https://example.com/image.jpg",
  title: "Sunset in Venice",
  artist: "Claude Monet",
  slug: "sunset-in-venice",
};

describe("ArtPiecesCard (with Zustand)", () => {
  test("renders image, title and artist", () => {
    render(<ArtPiecesCard {...mockProps} />);
    const image = screen.getByAltText(mockProps.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", expect.stringContaining("image.jpg"));
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
    expect(screen.getByText(`By ${mockProps.artist}`)).toBeInTheDocument();
  });

  test("calls toggleFavorite when heart is clicked", () => {
    const mockToggle = jest.fn();
    useStore.setState({ toggleFavorite: mockToggle });

    render(<ArtPiecesCard {...mockProps} />);

    const heartButton = screen.getByRole("button", {
      name: /toggle favorite/i,
    });

    fireEvent.click(heartButton);
    expect(mockToggle).toHaveBeenCalledTimes(1);
    expect(mockToggle).toHaveBeenCalledWith(mockProps.slug);
  });

  test("applies crimson border if favorite", () => {
    useStore.setState({ favorites: [mockProps.slug] });

    const { container } = render(<ArtPiecesCard {...mockProps} />);
    expect(container.firstChild).toHaveClass("cardFavorite");
  });
});
