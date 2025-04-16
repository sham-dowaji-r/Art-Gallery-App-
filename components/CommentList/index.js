import React from "react";

const CommentList = ({ comments }) => {
  if (!Array.isArray(comments) || comments.length === 0) {
    return <p>No comments yet.</p>;
  }

  return (
    <ul style={{ padding: 0, listStyle: "none", marginTop: "1rem" }}>
      {comments.map((comment, index) => (
        <li
          key={index}
          style={{
            marginBottom: "1rem",
            borderBottom: "1px solid #eee",
            paddingBottom: "0.5rem",
          }}
        >
          <p style={{ margin: 0 }}>{comment.text}</p>
          <small style={{ color: "#666" }}>
            {new Date(comment.date).toLocaleString()}
          </small>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
