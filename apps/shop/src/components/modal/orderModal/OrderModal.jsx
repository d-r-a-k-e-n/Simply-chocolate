import "./orderModal.css";
import Close from "../../../../public/icons/x-close.svg?react";
import Button from "../../ui/button/Button";
import { useCart, CART_STORAGE_KEY } from "../../../context/CartContext";

function formatPrice(cents) {
  return `$${(cents / 100).toFixed(2)}`;
}

export default function OrderModal() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
    totalPrice,
  } = useCart();

  const onBackdropClick = (event) => {
    if (event.target.classList.contains("order-modal__backdrop")) closeCart();
  };

  const buyProduct = () => {
    localStorage.removeItem(CART_STORAGE_KEY);
  };

  if (!isCartOpen) return null;

  return (
    <div className="order-modal__backdrop" onClick={onBackdropClick}>
      <div className="order-modal">
        <button
          type="button"
          className="order-modal__close-btn"
          onClick={closeCart}
        >
          <Close className="order-modal__icon" />
        </button>

        <div className="order-modal__container">
          <h3 className="order-modal__title">
            <span className="title-accent">buy </span>&nbsp;now
          </h3>

          <div className="order-modal__cart">
            {items.length === 0 ? (
              <p className="order-modal__empty">Your cart is empty</p>
            ) : (
              <ul className="order-modal__cart-list">
                {items.map((item) => (
                  <li key={item.id} className="order-modal__cart-item">
                    <img
                      className="order-modal__cart-img"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="order-modal__cart-info">
                      <p className="order-modal__cart-name">{item.name}</p>
                      <p className="order-modal__cart-price">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    <div className="order-modal__quantity">
                      <button
                        type="button"
                        className="order-modal__quantity-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        −
                      </button>
                      <span className="order-modal__quantity-value">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        className="order-modal__quantity-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        +
                      </button>
                    </div>
                    <p className="order-modal__cart-total">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    <button
                      type="button"
                      className="order-modal__remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <Close className="order-modal__remove-icon" />
                    </button>
                  </li>
                ))}
              </ul>
            )}

            {items.length > 0 && (
              <div className="order-modal__summary">
                <span className="order-modal__summary-label">Total:</span>
                <span className="order-modal__summary-value">
                  {formatPrice(totalPrice)}
                </span>
              </div>
            )}
          </div>

          <form className="order-modal__form">
            <h4 className="order-modal__form-title">Personal information</h4>
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
                required
                title="true"
              />
            </label>
            <Button
              className="button button--orange order-modal__btn"
              type="submit"
              onClick={() => buyProduct()}
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
