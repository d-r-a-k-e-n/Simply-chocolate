import "./news-modal.css";
import Close from "../../../../public/icons/x-close.svg?react";
import Button from "../../ui/button/Button";
import { mailerService } from '../../../services/mailer.service';
import { useState } from 'react';

export default function NewsModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const onBackdropClick = (event) => {
    if (event.target.classList.contains('news-modal__backdrop')) onClose();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting || !email.trim()) return;

    setIsSubmitting(true);
    setMessage("");

    try {
      await mailerService.sendMail({ email: email.trim() });
      setMessage("Success! Thank you");
      setEmail("");
      setTimeout(() => onClose(), 1500);
    } catch (error) {
      console.error(error);
      setMessage(error.message || "Failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
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
            Explore our <span className="title-accent">new chocolate</span>{' '}
            first!
          </h3>
          <form
            className="news-modal__form"
            name="form"
            onSubmit={handleSubmit}
          >
            <label className="news-modal__form-btn">
              <input
                placeholder="Enter your email"
                className="news-modal__label-input"
                name="email-subscribe"
                type="email"
                pattern="([A-z0-9]+@[a-z]+\.[a-z]{2,3})"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <Button
              className="button button--orange news-modal__btn"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
          </form>
          {message && <p className="news-modal__message">{message}</p>} //TODO
        </div>
      </div>
    </div>
  );
}
