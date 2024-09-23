import "./menu.css";

export default function Menu() {
  return (
    <ul className="menu">
      <li>
        <a className="link link--dark" href="#">
          Home
        </a>
      </li>
      <li>
        <a className="link link--dark" href="#">
          How it’s made?
        </a>
      </li>
      <li>
        <a className="link link--dark" href="#">
          Our products
        </a>
      </li>
      <li>
        <a className="link link--dark" href="#">
          Top sellers
        </a>
      </li>
      <li>
        <a className="link link--dark" href="#">
          Chocolate is loved
        </a>
      </li>
    </ul>
  );
}
