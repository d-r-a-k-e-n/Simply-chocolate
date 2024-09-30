import "./menu.css";

export default function Menu({ className }) {
  return (
    <ul className={className}>
      <li>
        <a className="link" href="#">
          Home
        </a>
      </li>
      <li>
        <a className="link" href="#">
          How it’s made?
        </a>
      </li>
      <li>
        <a className="link" href="#">
          Our products
        </a>
      </li>
      <li>
        <a className="link" href="#">
          Top sellers
        </a>
      </li>
      <li>
        <a className="link" href="#">
          Chocolate is loved
        </a>
      </li>
    </ul>
  );
}
