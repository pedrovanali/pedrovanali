import clsx from "clsx";
import { IScroll } from "../../interfaces";
import "./Menu.scss";

const Menu = ({ scrollPosition }: IScroll) => {
  return (
    <header>
      <nav className={clsx("nav", scrollPosition > 40 && "small")}>
        <ul>
          <li>
            <span>Work History</span>
          </li>
          <li>
            <span>Contact</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
