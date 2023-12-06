import { IParallax } from "@react-spring/parallax";
import { useState, useEffect, useCallback } from "react";
import ReactGA from "react-ga4";

const useParallaxScroll = (parallax: IParallax) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollTo = parallax?.scrollTo;
  const handleScroll = useCallback(() => {
    if (parallax) {
      const position = parallax.current;
      ReactGA.event({
        category: "Scrolled from menu",
        action: `scrolled to ${position}`,
        label: "scroll",
      });
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
