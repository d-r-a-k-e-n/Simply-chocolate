import "./header.css";
import Menu from "../menu/Menu";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../../public/icons/logo.svg";
import Instagram from "../../../public/icons/instagram.svg?react";
import Twitter from "../../../public/icons/twitter.svg?react";
import Burger from "../../../public/icons/menu.svg?react";
import { useState } from "react";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const { openCart, totalQuantity } = useCart();

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a className="logo" href="#home">
            <img className="logo" src={logo} alt="Logo Simply chocolate" />
          </a>
          <Menu className={"menu header__menu"} />
          <div className="header__actions">
            <button
              type="button"
              className="header__cart-btn"
              onClick={openCart}
              aria-label="Open cart"
            >
              <svg
                className="header__cart-icon"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 6H21L19 14H8L6 6Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L5 3H2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="9.5" cy="18.5" r="1.5" fill="currentColor" />
                <circle cx="17.5" cy="18.5" r="1.5" fill="currentColor" />
              </svg>
              {totalQuantity > 0 && (
                <span className="header__cart-count">{totalQuantity}</span>
              )}
            </button>
            <div className="social">
              <a href="#">
                <Instagram className="social__icon" />
              </a>
              <a href="#">
                <Twitter className="social__icon" />
              </a>
            </div>
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
