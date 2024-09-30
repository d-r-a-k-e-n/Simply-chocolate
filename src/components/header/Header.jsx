import "./header.css";
import Menu from "../menu/Menu";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "./../../img/icons/logo.svg";
import { ReactComponent as Instagram } from "./../../img/icons/instagram.svg";
import { ReactComponent as Twitter } from "./../../img/icons/twitter.svg";
import { ReactComponent as Burger } from "./../../img/icons/menu.svg";
import React, { useState } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a className="logo" href="/">
            <img className="logo" src={logo} alt="Logo Simply chocolate" />
          </a>
          <Menu className={"menu header__menu"} />
          <div className="social">
            <a href="#">
              <Instagram className="social__icon" />
            </a>
            <a href="#">
              <Twitter className="social__icon" />
            </a>
          </div>
          <button
            className="mobile-menu__btn-open"
            onClick={() => setMenuActive(!menuActive)}
          >
            <Burger />
          </button>

          <MobileMenu active={menuActive} setActive={setMenuActive} />
        </nav>
      </div>
    </header>
  );
}
