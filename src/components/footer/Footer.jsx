import Menu from "../menu/Menu";
import "./footer.css";
import { ReactComponent as Instagram } from "./../../img/icons/instagram.svg";
import { ReactComponent as Twitter } from "./../../img/icons/twitter.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <h2 className="footer__title">
            <span className="title-accent">Chocolate</span> a delicious cure for
            a bad day
          </h2>
          <div className="footer__contacts">
            <div className="footer__address">
              <h3 className="footer__contact-title">Contact us</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="footer__address-link" href="tel:+380684439426">
                    +380 (68) 443-94-26
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__address-link"
                    href="mailto:simplychoc@gmail.com"
                  >
                    simplychoc@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__social">
              <a href="#">
                <Instagram className="footer__social-icon" />
              </a>
              <a href="#">
                <Twitter className="footer__social-icon" />
              </a>
            </div>
          </div>
        </div>
        <Menu className="footer__menu" />
      </div>
    </footer>
  );
}
