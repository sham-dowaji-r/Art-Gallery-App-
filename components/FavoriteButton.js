import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import styles from "./FavoriteButton.module.css";

const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${isFavorite ? styles.red : ""}`}
      aria-label="Toggle Favorite"
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default FavoriteButton;
