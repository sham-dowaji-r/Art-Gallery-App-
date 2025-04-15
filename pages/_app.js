import { useState } from "react";
import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (slug) => {
    setFavorites((prev) =>
      prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug]
    );
  };

  return (
    <>
      <Component
        {...pageProps}
        favorites={favorites}
        toggleFavorite={toggleFavorite} // تمرير toggleFavorite هنا
      />
      <Navigation />
    </>
  );
}
