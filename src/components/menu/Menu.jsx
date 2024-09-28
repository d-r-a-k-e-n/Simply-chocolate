import "./menu.css";
import { MENU_STYLE } from "./data";

export default function Menu({ style }) {
  const getButtonClass = () => {
    switch (style) {
      case MENU_STYLE.HEADER:
        return "menu header__menu";
      case MENU_STYLE.FOOTER:
        return "menu footer__menu";
      case MENU_STYLE.MOBILE:
        return "menu mobile__menu";
    }
  };

  return (
    <ul className={getButtonClass()}>
      <li>
        <a className="link" href="#">
          Home
        </a>
      </li>
      <li>
        <a className="link" href="#">
          How it’s made?
        </a>
      </li>
      <li>
        <a className="link" href="#">
          Our products
        </a>
      </li>
      <li>
        <a className="link" href="#">
          Top sellers
        </a>
      </li>
      <li>
        <a className="link" href="#">
          Chocolate is loved
        </a>
      </li>
    </ul>
  );
}
