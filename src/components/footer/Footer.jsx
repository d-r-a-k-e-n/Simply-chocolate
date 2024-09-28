import Menu from "../menu/Menu";
import { MENU_STYLE } from "../menu/data";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <Menu style={MENU_STYLE.FOOTER}></Menu>
      </div>
    </footer>
  );
}
