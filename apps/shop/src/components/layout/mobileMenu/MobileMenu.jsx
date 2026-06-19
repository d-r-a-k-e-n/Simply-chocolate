import "./mobile-menu.css";
import "../menu/menu.css";
import Menu from "../menu/Menu";
import Close from "../../../../public/icons/x-close.svg?react";
import Instagram from "../../../../public/icons/instagram.svg?react";
import Twitter from "../../../../public/icons/twitter.svg?react";
import Button from "../../ui/button/Button";

export default function MobileMenu({ active, setActive }) {
  return (
    <div
      className={active ? "mobile-menu active" : "mobile-menu"}
      onClick={() => setActive(false)}
    >
      <Button
        variant="icon"
        className="mobile-menu__btn-close"
        aria-label="Close menu"
      >
        <Close className="mobile-menu__icon" />
      </Button>
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
