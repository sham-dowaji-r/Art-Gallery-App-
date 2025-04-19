import { useEffect } from "react";

export default function useBackgroundGradient(colors) {
  useEffect(() => {
    if (!colors || colors.length === 0) return;

    const backgroundGradient = `linear-gradient(to top, ${colors.join(", ")})`;
    document.body.style.background = backgroundGradient;

    return () => {
      document.body.style.background = "";
    };
  }, [colors]);
}
