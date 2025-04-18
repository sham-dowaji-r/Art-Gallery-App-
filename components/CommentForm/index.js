import React, { useState } from "react";
import useStore from "../store";
import styles from "./CommentForm.module.css";

const CommentForm = ({ slug, mainColor = "#666" }) => {
  const [text, setText] = useState("");
  const saveComment = useStore((state) => state.saveComment);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    saveComment(slug, text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        value={text}
        id="comment"
        name="comment"
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts here..."
        className={styles.textarea}
        style={{
          "--mainColor": mainColor, // ✅ نمرر اللون لمتحول CSS
        }}
      />
      <button type="submit" className={styles.button}>
        Send
      </button>
    </form>
  );
};

export default CommentForm;
