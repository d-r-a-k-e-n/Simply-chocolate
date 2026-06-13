import './input.css'

export default function Input({
  placeholder,
  className,
  name,
  type,
  pattern,
  required = false,
  title,
}) {
  return (
    <input
      placeholder={placeholder}
      className={`review-modal__label-input ${className || ''}`}
      name={name}
      type={type}
      pattern={pattern}
      required={required}
      title={title}
    />
  );
}
