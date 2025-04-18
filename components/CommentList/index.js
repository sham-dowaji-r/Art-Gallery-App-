import React from "react";
import { formatDistanceToNow } from "date-fns";

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
          <small style={{ color: "#333" }}>
            {comment.date
              ? formatDistanceToNow(new Date(comment.date), { addSuffix: true })
              : "Unknown time"}
          </small>
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
