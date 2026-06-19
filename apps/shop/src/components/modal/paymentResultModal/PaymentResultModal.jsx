import Button from "../../ui/button/Button";
import "./paymentResultModal.css";

const CONTENT = {
  success: {
    title: "Payment successful",
    text: "Thank you for your order! We will contact you soon to confirm the details.",
  },
  cancel: {
    title: "Payment not completed",
    text: "The payment was cancelled or failed. You can try again whenever you are ready.",
  },
};

export default function PaymentResultModal({ isOpen, status, onClose }) {
  if (!isOpen || !status) return null;

  const content = CONTENT[status] ?? CONTENT.cancel;

  const onBackdropClick = (event) => {
    if (event.target.classList.contains("payment-result-modal__backdrop")) {
      onClose();
    }
  };

  return (
    <div className="payment-result-modal__backdrop" onClick={onBackdropClick}>
      <div
        className={`payment-result-modal payment-result-modal--${status}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="payment-result-title"
      >
        <h3 id="payment-result-title" className="payment-result-modal__title">
          {content.title}
        </h3>
        <p className="payment-result-modal__text">{content.text}</p>
        <Button variant="primary" className="payment-result-modal__btn" onClick={onClose}>
          Got it
        </Button>
      </div>
    </div>
  );
}
