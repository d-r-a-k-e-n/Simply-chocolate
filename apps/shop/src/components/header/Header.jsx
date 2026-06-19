import "./header.css";
import Menu from "../menu/Menu";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../../public/icons/logo.svg";
import Instagram from "../../../public/icons/instagram.svg?react";
import Twitter from "../../../public/icons/twitter.svg?react";
import Burger from "../../../public/icons/menu.svg?react";
import Cart from '../../../public/icons/cart.svg?react';
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
          <Menu className={'menu header__menu'} />
          <div className="header__actions">
            <button
              type="button"
              className="header__cart-btn"
              onClick={openCart}
              aria-label="Open cart"
            >
              <Cart className="header__cart-icon" strokeWidth="1.5" />
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
