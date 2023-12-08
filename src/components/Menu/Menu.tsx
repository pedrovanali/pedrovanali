import clsx from "clsx";
import { IScroll } from "../../interfaces";
import "./Menu.scss";
import { Adaptive } from "../../hooks/useAdaptiveTriggers";
import ReactGA from "react-ga4";
import { breakpoints } from "../../configs";

type MenuProps = IScroll & {
  scrollTo(offset: number): void;
  width: Adaptive;
};

const Menu = ({ scrollTo, scrollPosition, width }: MenuProps) => {
  const screenWidth = window.screen.width;

  const screenCoalescing = 1 - screenWidth / breakpoints[width];

  const educationPositionBasedOnWidth: Record<string, number> = {
    [Adaptive.xs]: 2.6 + screenCoalescing,
    [Adaptive.sm]: 2 + screenCoalescing,
    [Adaptive.md]: 1.75 + screenCoalescing,
    [Adaptive.lg]: 1.5+ screenCoalescing,
    [Adaptive.xl]: 2.38 + screenCoalescing,
    [Adaptive.xxl]: 2.38 + screenCoalescing,
  };
  const scrollToHandler = (position: number, option: string) => () => {
    if (position > 0) {
      ReactGA.event({
        category: "menu navigation",
        action: `clicked at ${option}`,
      });
      scrollTo(position);
    }
  };
  return (
    <header>
      <nav className={clsx("nav", scrollPosition > 40 && "small")}>
        <ul>
          <li>
            <button onClick={scrollToHandler(0.05, "work history")}>
              Work History
            </button>
          </li>
          <li>
            <button
              onClick={scrollToHandler(
                educationPositionBasedOnWidth[width],
                "education"
              )}
            >
              Education{" "}
            </button>
          </li>
          <li>
            <button onClick={scrollToHandler(3.5, "contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
