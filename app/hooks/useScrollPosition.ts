import { useEffect, useState } from "react";

interface ScrollPosition {
  scrollX: number;
  scrollY: number;
}

export function useScrollPosition(): ScrollPosition {
  const [position, setPosition] = useState<ScrollPosition>({
    scrollX: 0,
    scrollY: 0,
  });

  useEffect(() => {
    const handleScroll = (): void => {
      setPosition({
        scrollX: window.scrollX ?? 0,
        scrollY: window.scrollY ?? 0,
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return position;
}
