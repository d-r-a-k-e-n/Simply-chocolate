import Input from '../../ui/input/Input'
import Close from "../../../../public/icons/x-close.svg?react";
import { reviewModalInputList } from './reviewModalInputList.js';

import "./reviewModal.css";

export default function ReviewModal({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div
          className="review-modal__backdrop"
          onClickCapture={(e) =>
            e.target.classList.contains('review-modal__backdrop') && onClose()
          }
        >
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
                {reviewModalInputList.map((item) => (
                  <Input
                    key={item.name}
                    placeholder={item.placeholder}
                    name={item.name}
                    className={item.className}
                    type={item.type}
                    pattern={item.pattern}
                    required={item.required}
                  />
                ))}
                <textarea
                  placeholder="Enter text"
                  className="review-modal__form-text"
                  name="text-review"
                  required
                />
                <button
                  className="button button--orange review-modal__btn"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
