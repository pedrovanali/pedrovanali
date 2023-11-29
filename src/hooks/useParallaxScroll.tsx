import { IParallax } from "@react-spring/parallax";
import { useState, useEffect, useCallback } from "react";

const useParallaxScroll = (parallax: React.MutableRefObject<IParallax>) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = useCallback(() => {
    if (parallax) {
      const position = parallax.current.current;
      setScrollPosition(position);
    }
  }, [parallax, setScrollPosition]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return { scrollPosition, handleScroll, scrollTo: parallax?.current?.scrollTo };
};

export default useParallaxScroll;
