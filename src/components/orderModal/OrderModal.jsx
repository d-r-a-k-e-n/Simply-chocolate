import "./orderModal.css";
import { ReactComponent as Close } from "../../img/icons/x-close.svg";
import Button from "../button/Button";
import LimeSeaSalt from "../../img/our-products/lime-chocolate.jpg";
import Pineapple from "../../img/our-products/pineapple-chocolate.jpg";
import ClassicMilk from "../../img/our-products/classic-milk-chocolate.jpg";

export default function OrderModal({ isOpen, onClose }) {
  const onBackdropClick = (event) => {
    if (event.target.classList.contains("order-modal__backdrop")) onClose();
  };
  return (
    <>
      {isOpen && (
        <div className="order-modal__backdrop" onClick={onBackdropClick}>
          <div className="order-modal">
            <button
              type="button"
              className="order-modal__close-btn"
              onClick={() => onClose()}
            >
              <Close className="order-modal__icon" />
            </button>

            <div className="order-modal__container">
              <h3 className="order-modal__title">
                <span className="title-accent">buy </span>&nbsp;now
              </h3>
              <div className="order-modal__product">
                <img className="order-modal__img" src={LimeSeaSalt} />
                <img className="order-modal__img" src={Pineapple} />
                <img className="order-modal__img" src={ClassicMilk} />
              </div>
              <form className="order-modal__form">
                <h4 className="order-modal__form-title">
                  Personal information
                </h4>
                <fieldset className="order-modal__fieldset">
                  <label className="order-modal__form-btn">
                    <input
                      placeholder="Name"
                      className="order-modal__label-input user-name"
                      name="name-order"
                      type="text"
                      required
                      title="true"
                    />
                  </label>
                  <label className="order-modal__form-btn">
                    <input
                      placeholder="Surname"
                      className="order-modal__label-input user-name"
                      name="surname-order"
                      type="text"
                      required
                      title="true"
                    />
                  </label>
                </fieldset>
                <h4 className="order-modal__form-title">Email</h4>
                <label className="order-modal__form-btn">
                  <input
                    placeholder="Email"
                    className="order-modal__label-input"
                    name="email-subscribe"
                    type="email"
                    pattern="([A-z0-9]+@[a-z]+\.[a-z]{2,3})"
                    required
                    title="true"
                  />
                </label>
                <h4 className="order-modal__form-title">Phone number</h4>
                <label className="order-modal__form-btn">
                  <input
                    placeholder="Phone number"
                    className="order-modal__label-input"
                    name="phone-order"
                    type="phone"
                    pattern="\+[0-9]{12}"
                    required
                    title="true"
                  />
                </label>
                <h4 className="order-modal__form-title">Comment</h4>
                <label className="order-modal__form-btn">
                  <textarea
                    placeholder="Enter text"
                    className="order-modal__form-text"
                    name="text-order"
                    type="text"
                    required
                    title="true"
                  />
                </label>
                <Button
                  className="button button--orange order-modal__btn"
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
