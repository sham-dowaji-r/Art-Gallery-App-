import { render, screen } from "@testing-library/react";
import CommentList from ".";
import "@testing-library/jest-dom";

//  نعمل موك للملف الكامل مع default
jest.mock("date-fns/formatDistanceToNow", () => ({
  __esModule: true,
  default: () => "just now",
}));

describe("CommentList", () => {
  test("shows 'No comments yet.' if there are no comments", () => {
    render(<CommentList comments={[]} />);
    expect(screen.getByText(/no comments yet/i)).toBeInTheDocument();
  });

  test("renders a list of comments", () => {
    const mockComments = [
      { text: "Beautiful artwork!", date: new Date().toISOString() },
      { text: "Love the colors.", date: new Date().toISOString() },
    ];

    render(<CommentList comments={mockComments} />);

    expect(screen.getByText("Beautiful artwork!")).toBeInTheDocument();
    expect(screen.getByText("Love the colors.")).toBeInTheDocument();
    expect(screen.getAllByText(/just now/i)).toHaveLength(2);
  });
});
