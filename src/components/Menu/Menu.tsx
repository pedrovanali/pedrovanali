import clsx from "clsx";
import { IScroll } from "../../interfaces";
import "./Menu.scss";
import { Adaptive } from "../../hooks/useAdaptiveTriggers";

type MenuProps = IScroll & {
  scrollTo(offset: number): void;
  width: Adaptive;
};

const Menu = ({ scrollTo, scrollPosition, width }: MenuProps) => {
  return (
    <header>
      <nav className={clsx("nav", scrollPosition > 40 && "small")}>
        <ul>
          <li>
            <button onClick={() => scrollTo && scrollTo(0.05)}>
              Work History
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                scrollTo && scrollTo(width === Adaptive.xs ? 2.38 : 2)
              }
            >
              Education{" "}
            </button>
          </li>
          <li>
            <button onClick={() => scrollTo && scrollTo(3.5)}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
