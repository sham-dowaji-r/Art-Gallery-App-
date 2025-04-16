import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      favorites: [],
      comments: {},
      toggleFavorite: (slug) => {
        const { favorites } = get();
        const updated = favorites.includes(slug)
          ? favorites.filter((item) => item !== slug)
          : [...favorites, slug];
        set({ favorites: updated });
      },

      saveComment: (slug, text) => {
        const newComment = {
          text,
          date: new Date().toISOString(),
        };

        set((state) => ({
          comments: {
            ...state.comments,
            [slug]: [...(state.comments[slug] || []), newComment],
          },
        }));
      },
    }),
    { name: "art-store" }
  )
);
export default useStore;
