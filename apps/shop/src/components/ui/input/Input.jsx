import React, { forwardRef } from 'react'; // 1. Імпортуємо forwardRef
import './input.css';

const Input = forwardRef(
  (
    { placeholder, className, name, type, pattern, required = false, title },
    ref,
  ) => {
    return (
      <input
        placeholder={placeholder}
        className={`review-modal__label-input ${className || ''}`}
        name={name}
        type={type}
        pattern={pattern}
        required={required}
        title={title}
        ref={ref} // 4. Передаємо його в нативний input
      />
    );
  },
);

export default Input;
