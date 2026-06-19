import Input from "../../ui/input/Input";
import Button from "../../ui/button/Button";
import Close from "../../../../public/icons/x-close.svg?react";
import { responseService } from "../../../services/response.service";
import { useToast } from "../../../context/ToastContext";

import { useState, useRef } from "react";

import "./reviewModal.css";

export default function ReviewModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showToast } = useToast();

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const textRef = useRef(null);

  const createResponse = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const data = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        phone: phoneRef.current.value,
        text: textRef.current.value,
      };

      await responseService.create(data);
      showToast({
        type: "success",
        message: "Your review has been sent successfully. Thank you!",
      });
      onClose();
    } catch (error) {
      console.error(error);
      showToast({
        type: "error",
        message: error.message || "Failed to send your review. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="review-modal__backdrop"
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <div className="review-modal">
        <Button
          variant="icon"
          className="review-modal__close-btn"
          onClick={() => onClose()}
          aria-label="Close modal"
        >
          <Close className="review-modal__icon" />
        </Button>
        <div className="review-modal__container">
          <h3 className="review-modal__title">
            leave a review <br className="reviw-modal__br" />
            about <span className="title-accent">our chocolate</span>
          </h3>
          <form className="review-modal__form" name="form" onSubmit={createResponse}>
            <Input
              placeholder="Name"
              name="name-review"
              type="text"
              required={true}
              ref={nameRef}
            />

            <Input
              placeholder="Enter your email"
              name="email-review"
              type="email"
              pattern="([A-z0-9]+@[a-z]+\.[a-z]{2,3})"
              required={true}
              ref={emailRef}
            />

            <Input
              placeholder="Phone number"
              name="phone-review"
              type="tel"
              pattern="\+[0-9]{12}"
              required={true}
              ref={phoneRef}
            />

            <textarea
              placeholder="Enter text"
              className="review-modal__form-text"
              name="text-review"
              required
              ref={textRef}
            />

            <Button
              variant="primary"
              className="review-modal__btn"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
