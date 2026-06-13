import "./mobile-menu.css";
import "../menu/menu.css";
import Menu from "../menu/Menu";
import Close from "./../../img/icons/x-close.svg?react";
import Instagram from "./../../img/icons/instagram.svg?react";
import Twitter from "./../../img/icons/twitter.svg?react";

export default function MobileMenu({ active, setActive }) {
  return (
    <div
      className={active ? "mobile-menu active" : "mobile-menu"}
      onClick={() => setActive(false)}
    >
      <button className="mobile-menu__btn-close">
        <Close className="mobile-menu__icon" />
      </button>
      <Menu className={"menu mobile__menu"} />
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
