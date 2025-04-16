/*import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([]);

  // ✅ عند أول تحميل: جلب المفضلات من localStorage
  useEffect(() => {
    try {
      const storedFavoritesRaw = localStorage.getItem("favorites");
      const storedFavorites = storedFavoritesRaw
        ? JSON.parse(storedFavoritesRaw)
        : [];

      setFavorites(storedFavorites);
    } catch (err) {
      console.warn("Failed to load favorites from localStorage:", err);
      setFavorites([]);
    }
  }, []);

  // ✅ تحديث localStorage عند كل تعديل على المفضلات
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // ✅ دالة تبديل المفضلة
  const toggleFavorite = (slug) => {
    setFavorites((prev) => {
      if (!Array.isArray(prev)) {
        console.warn("❗ favorites is not an array:", prev);
        return []; // fallback للحماية
      }

      return prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug];
    });
  };

  return (
    <>
      <Component
        {...pageProps}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <Navigation />
    </>
  );
}
*/
import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";

export default function App({ Component, pageProps }) {
  const [favorites, setFavorites] = useState([]);
  const [isReady, setIsReady] = useState(false); // 🟡 فلتر لحماية التخزين المبكر

  // ✅ القراءة من localStorage عند أول تحميل
  useEffect(() => {
    try {
      const stored = localStorage.getItem("favorites");
      const parsed = stored ? JSON.parse(stored) : [];
      if (Array.isArray(parsed)) {
        setFavorites(parsed);
      }
    } catch (err) {
      console.warn("⚠️ Failed to parse favorites from localStorage", err);
      setFavorites([]);
    } finally {
      setIsReady(true); // ✅ جاهزين للكتابة
    }
  }, []);

  // ✅ الكتابة إلى localStorage فقط بعد القراءة
  useEffect(() => {
    if (isReady) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites, isReady]);

  // ✅ إضافة/إزالة من المفضلة
  const toggleFavorite = (slug) => {
    setFavorites((prev) => {
      if (!Array.isArray(prev)) return [];
      return prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug];
    });
  };

  return (
    <>
      <Component
        {...pageProps}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />
      <Navigation />
    </>
  );
}
