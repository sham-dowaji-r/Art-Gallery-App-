import React, { useState } from "react";
import useStore from "../store";

const CommentForm = ({ slug }) => {
  const [text, setText] = useState("");
  const saveComment = useStore((state) => state.saveComment);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    saveComment(slug, text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts here..."
        style={{
          width: "100%",
          minHeight: "80px",
          padding: "0.5rem",
          borderRadius: "8px",
          border: "1px solid #ccc",
          fontFamily: "inherit",
        }}
      />
      <button
        type="submit"
        style={{
          marginTop: "0.5rem",
          backgroundColor: "#222",
          color: "white",
          padding: "0.5rem 1rem",
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </form>
  );
};

export default CommentForm;
