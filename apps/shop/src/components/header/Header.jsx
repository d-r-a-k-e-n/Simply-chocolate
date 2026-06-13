import "./header.css";
import Menu from "../menu/Menu";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "./../../img/icons/logo.svg";
import Instagram from "./../../img/icons/instagram.svg?react";
import Twitter from "./../../img/icons/twitter.svg?react";
import Burger from "./../../img/icons/menu.svg?react";
import React, { useState } from "react";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a className="logo" href="#home">
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
