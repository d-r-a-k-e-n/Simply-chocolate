import "./mobile-menu.css";
import "../menu/menu.css";
import Menu from "../menu/Menu";
import { MENU_STYLE } from "../menu/data";
import { ReactComponent as Close } from "./../../img/icons/x-close.svg";
import { ReactComponent as Instagram } from "./../../img/icons/instagram.svg";
import { ReactComponent as Twitter } from "./../../img/icons/twitter.svg";

export default function MobileMenu({ active, setActive }) {
  return (
    <div
      className={active ? "mobile-menu active" : "mobile-menu"}
      onClick={() => setActive(false)}
    >
      <button className="mobile-menu__btn-close">
        <Close className="mobile-menu__icon" />
      </button>
      <Menu style={MENU_STYLE.MOBILE} />
      <div className="mobile-menu__social ">
        <a href="#">
          <Instagram className="mobile-menu__icon" />
        </a>
        <a href="#">
          <Twitter className="mobile-menu__icon" />
        </a>
      </div>
    </div>
  );
}
