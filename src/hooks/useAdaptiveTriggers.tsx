import { useLayoutEffect, useState } from "react";
import { breakpoints } from "../configs/breakpoints";

export enum Adaptive {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
}

interface UseAdaptiveTriggersProps {
  onExtraSmallEnter?: () => void;
  onSmallEnter?: () => void;
  onMediumEnter?: () => void;
  onLargeEnter?: () => void;
  onExtraLargeEnter?: () => void;
}

export const useAdaptiveTriggers = ({
  onExtraSmallEnter,
  onSmallEnter,
  onMediumEnter,
  onLargeEnter,
  onExtraLargeEnter,
}: UseAdaptiveTriggersProps): Adaptive => {
  const [width, setWidth] = useState<Adaptive>(Adaptive.xl);
  useLayoutEffect(() => {
    const handleResize = () => {
      if (window?.innerWidth < breakpoints.xs) {
        onExtraSmallEnter?.();
        return setWidth(Adaptive.xs);
      }
      if (window?.innerWidth < breakpoints.sm) {
        onSmallEnter?.();
        return setWidth(Adaptive.sm);
      }
      if (window?.innerWidth < breakpoints.md) {
        onMediumEnter?.();
        return setWidth(Adaptive.md);
      }
      if (window?.innerWidth < breakpoints.lg) {
        onLargeEnter?.();
        return setWidth(Adaptive.lg);
      }
      onExtraLargeEnter?.();
      return setWidth(Adaptive.xl);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [
    onSmallEnter,
    onMediumEnter,
    onLargeEnter,
    onExtraLargeEnter,
    onExtraSmallEnter,
  ]);
  return width;
};
