import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        position: "absolute",
        top: "10px",
        right: "10px",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer",
        fontSize: "1.5rem",
        zIndex: 5,
        color: isFavorite ? "red" : "white",
        textShadow: "0 0 5px rgba(0,0,0,0.6)", // بيخلي اللون واضح لو الخلفية فاتحة
      }}
      aria-label="Toggle Favorite"
    >
      {isFavorite ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default FavoriteButton;
