import clsx from "clsx";
import { IScroll } from "../../interfaces";
import "./Menu.scss";

type MenuProps = IScroll & {
  scrollTo(offset: number): void;
};

const Menu = ({ scrollTo, scrollPosition }: MenuProps) => {
  console.log(scrollTo)
  return (
    <header>
      <nav className={clsx("nav", scrollPosition > 40 && "small")}>
        <ul>
          <li>
            <button onClick={() => scrollTo(0.05)}>Work History</button>
          </li>
          <li>
            <button>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
