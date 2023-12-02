import clsx from "clsx";
import { IScroll } from "../../interfaces";
import "./Menu.scss";

type MenuProps = IScroll & {
  scrollTo(offset: number): void;
};

const Menu = ({ scrollTo, scrollPosition }: MenuProps) => {
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
            <button onClick={() => scrollTo && scrollTo(2)}>
              Education
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
