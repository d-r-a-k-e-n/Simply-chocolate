import "./button.css";
import { BUTTON_STYLE } from "./button";

// const BUTTON_STYLE = {
//   ORANGE: "ORANGE",
//   TRANSPARENT: "TRANSPARENT",
//   TRANSPARENT_OR: "TRANSPARENT_OR",
//   SCROLL_DOWN: "SCROLL_DOWN",
// };

export default function Button({ children, style }) {
  const getButtonClass = () => {
    switch (style) {
      case BUTTON_STYLE.ORANGE:
        return "button button--orange";

      case BUTTON_STYLE.TRANSPARENT:
        return "button button--transparent";

      case BUTTON_STYLE.TRANSPARENT_OR:
        return "button button--transparent-or";

      case BUTTON_STYLE.SCROLL_DOWN:
        return "button button--scroll-down";
    }
  };

  return <button className={getButtonClass()}>{children}</button>;
}
