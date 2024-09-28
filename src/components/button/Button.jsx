import "./button.css";
import { BUTTON_STYLE } from "./button";

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
