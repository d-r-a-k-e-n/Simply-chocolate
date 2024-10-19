import "./reviewModal.css";
import { ReactComponent as Close } from "../../img/icons/x-close.svg";
import Button from "../button/Button";

export default function ReviewModal({ isOpen, onClose }) {
  const onBackdropClick = (event) => {
    if (event.target.classList.contains("review-modal__backdrop")) onClose();
  };
  return (
    <>
      {isOpen && (
        <div className="review-modal__backdrop" onClick={onBackdropClick}>
          <div className="review-modal">
            <button
              type="button"
              className="review-modal__close-btn"
              onClick={() => onClose()}
            >
              <Close className="review-modal__icon" />
            </button>
            <div className="review-modal__container">
              <h3 className="review-modal__title">
                leave a review <br className="reviw-modal__br" />
                about <span className="title-accent">our chocolate</span>
              </h3>
              <form className="review-modal__form" name="form">
                <label className="review-modal__form-btn">
                  <input
                    placeholder="Name"
                    className="review-modal__label-input"
                    name="name-review"
                    type="name"
                    required
                    title="true"
                  />
                </label>
                <label className="review-modal__form-btn">
                  <input
                    placeholder="Enter your email"
                    className="review-modal__label-input"
                    name="email-subscribe"
                    type="email"
                    pattern="([A-z0-9]+@[a-z]+\.[a-z]{2,3})"
                    required
                    title="true"
                  />
                </label>
                <label className="review-modal__form-btn">
                  <input
                    placeholder="Phone number"
                    className="review-modal__label-input"
                    name="phone-subscribe"
                    type="phone"
                    pattern="\+[0-9]{12}"
                    required
                    title="true"
                  />
                </label>
                <label className="review-modal__form-btn ">
                  <textarea
                    placeholder="Enter text"
                    className="review-modal__form-text "
                    name="text-review"
                    type="text"
                    required
                    title="true"
                  />
                </label>
                <Button
                  className="button button--orange review-modal__btn"
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
