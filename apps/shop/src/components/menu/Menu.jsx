import "./menu.css";

export default function Menu({ className }) {
  return (
    <ul className={className}>
      <li>
        <a className="link" href="#home">
          Home
        </a>
      </li>
      <li>
        <a className="link" href="#made-section">
          How it’s made?
        </a>
      </li>
      <li>
        <a className="link" href="#products-section">
          Our products
        </a>
      </li>
      <li>
        <a className="link" href="#top-sellers-section">
          Top sellers
        </a>
      </li>
      <li>
        <a className="link" href="#response-section">
          Chocolate is loved
        </a>
      </li>
    </ul>
  );
}
