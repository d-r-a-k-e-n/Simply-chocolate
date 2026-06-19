import "./header.css";
import Menu from "../menu/Menu";
import MobileMenu from "../mobileMenu/MobileMenu";
import logo from "../../../../public/icons/logo.svg";
import Instagram from "../../../../public/icons/instagram.svg?react";
import Twitter from "../../../../public/icons/twitter.svg?react";
import Burger from "../../../../public/icons/menu.svg?react";
import Cart from '../../../../public/icons/cart.svg?react';
import { useState } from "react";
import { useCart } from "../../../context/CartContext";
import Button from "../../ui/button/Button";

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
            <Button
              variant="icon"
              className="header__cart-btn"
              onClick={openCart}
              aria-label="Open cart"
            >
              <Cart className="header__cart-icon" strokeWidth="1.5" />
              {totalQuantity > 0 && (
                <span className="header__cart-count">{totalQuantity}</span>
              )}
            </Button>
            <div className="social">
              <a href="https://instagram.com" target="_blank">
                <Instagram className="social__icon" />
              </a>
              <a href="https://x.com" target="_blank">
                <Twitter className="social__icon" />
              </a>
            </div>
          </div>
          <Button
            variant="icon"
            className="mobile-menu__btn-open"
            onClick={() => setMenuActive(!menuActive)}
            aria-label="Open menu"
          >
            <Burger />
          </Button>

          <MobileMenu active={menuActive} setActive={setMenuActive} />
        </nav>
      </div>
    </header>
  );
}
