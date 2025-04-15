import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0, // يغطي كامل العرض
        backgroundColor: "#222",
        color: "white",
        padding: "1rem 0",
        display: "flex",
        justifyContent: "space-around",
        zIndex: 1000,
        borderTop: "1px solid #444",
      }}
    >
      <Link
        href="/"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        SpotLight
      </Link>
      <Link
        href="/gallery"
        style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}
      >
        Art Pieces🎨
      </Link>
    </nav>
  );
};
export default Navigation;
