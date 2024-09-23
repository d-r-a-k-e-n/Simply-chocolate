import Menu from "../menu/Menu";
import "./header.css";
import logo from "./../../img/icons/logo.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <a className="logo" href="/">
            <img src={logo} alt="Logo Simply chocolate" />
          </a>
          <Menu />
          <div className="social">
            <a href="#">
              <img src={instagram} alt="" />
            </a>
            <a href="#">
              <img src={twitter} alt="" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
