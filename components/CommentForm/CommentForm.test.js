import { render, screen, fireEvent } from "@testing-library/react";
import CommentForm from ".";
import "@testing-library/jest-dom";
import useStore from "../store";

// 🛠️ موك للـ store
jest.mock("../store", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("CommentForm", () => {
  beforeEach(() => {
    jest.clearAllMocks(); //  ننضف الموكات قبل كل تيست
  });

  test("renders the textarea and button", () => {
    useStore.mockImplementation((selector) =>
      selector({ saveComment: jest.fn() })
    );

    render(<CommentForm slug="art-piece-1" />);

    expect(
      screen.getByPlaceholderText(/write your thoughts/i)
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
  });

  test("allows user to type in textarea", () => {
    useStore.mockImplementation((selector) =>
      selector({ saveComment: jest.fn() })
    );

    render(<CommentForm slug="art-piece-1" />);

    const textarea = screen.getByPlaceholderText(/write your thoughts/i);
    fireEvent.change(textarea, { target: { value: "Amazing artwork!" } });

    expect(textarea.value).toBe("Amazing artwork!");
  });

  test("calls saveComment on form submit", () => {
    const saveCommentMock = jest.fn();
    useStore.mockImplementation((selector) =>
      selector({ saveComment: saveCommentMock })
    );

    render(<CommentForm slug="art-piece-1" />);

    const textarea = screen.getByPlaceholderText(/write your thoughts/i);
    const button = screen.getByRole("button", { name: /send/i });

    fireEvent.change(textarea, { target: { value: "Amazing!" } });
    fireEvent.click(button);

    expect(saveCommentMock).toHaveBeenCalledTimes(1);
    expect(saveCommentMock).toHaveBeenCalledWith("art-piece-1", "Amazing!");
  });

  test("does not call saveComment if text is empty", () => {
    const saveCommentMock = jest.fn();
    useStore.mockImplementation((selector) =>
      selector({ saveComment: saveCommentMock })
    );

    render(<CommentForm slug="art-piece-1" />);

    const button = screen.getByRole("button", { name: /send/i });

    fireEvent.click(button);

    expect(saveCommentMock).not.toHaveBeenCalled();
  });
});
