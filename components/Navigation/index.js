import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <Link
        href="/"
        className={`${styles.link} ${
          router.pathname === "/" ? styles.active : ""
        }`}
      >
        SpotLight
      </Link>
      <Link
        href="/gallery"
        className={`${styles.link} ${
          router.pathname === "/gallery" ? styles.active : ""
        }`}
      >
        Art Pieces🎨
      </Link>
      <Link
        href="/favorites"
        className={`${styles.link} ${
          router.pathname === "/favorites" ? styles.active : ""
        }`}
      >
        Favorites ❤️
      </Link>
    </nav>
  );
};
export default Navigation;
