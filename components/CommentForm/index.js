import React, { useState } from "react";
import useStore from "../store";
import styles from "./CommentForm.module.css";

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your thoughts here..."
        className={styles.textarea}
      />
      <button type="submit" className={styles.button}>
        Send
      </button>
    </form>
  );
};

export default CommentForm;
