import "./news-modal.css";
import { ReactComponent as Close } from "../../img/icons/x-close.svg";
import Button from "../button/Button";

export default function NewsModal({ isOpen, onClose }) {
  const onBackdropClick = (event) => {
    if (event.target.classList.contains("news-modal__backdrop")) onClose();
  };
  return (
    <>
      {isOpen && (
        <div className="news-modal__backdrop" onClick={onBackdropClick}>
          <div className="news-modal">
            <button
              type="button"
              className="news-modal__close-btn"
              onClick={() => onClose()}
            >
              <Close className="news-modal__icon" />
            </button>
            <div className="news-modal__bacground-img"></div>
            <div className="news-modal__container">
              <h3 className="news-modal__title">
                Explore our <span className="title-accent">new chocolate</span>{" "}
                first!
              </h3>
              <form className="news-modal__form" name="form">
                <label className="news-modal__form-btn">
                  <input
                    placeholder="Enter your email"
                    className="news-modal__label-input"
                    name="email-subscribe"
                    type="email"
                    pattern="([A-z0-9]+@[a-z]+\.[a-z]{2,3})"
                    required
                    title="true"
                  />
                </label>
                <Button
                  className="button button--orange news-modal__btn"
                  type="submit"
                >
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
