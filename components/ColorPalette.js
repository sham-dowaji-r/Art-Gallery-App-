import React from "react";

const ColorPalette = ({ colors }) => {
  if (!Array.isArray(colors) || colors.length === 0) {
    return <p>No colors available</p>;
  }

  return (
    <div style={{ display: "flex", gap: "0.5rem", marginTop: "1rem" }}>
      {colors.map((color) => (
        <div
          key={color}
          title={color}
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "10%",
            backgroundColor: color,
            border: "1px solid #ccc",
          }}
        />
      ))}
    </div>
  );
};

export default ColorPalette;
