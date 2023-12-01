import { IParallax } from "@react-spring/parallax";
import { useState, useEffect, useCallback } from "react";

const useParallaxScroll = (parallax: IParallax) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollTo = parallax?.scrollTo;
  const handleScroll = useCallback(() => {
    if (parallax) {
      const position = parallax.current;
      setScrollPosition(position);
    }
  }, [parallax, setScrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { scrollPosition, handleScroll, scrollTo };
};

export default useParallaxScroll;
