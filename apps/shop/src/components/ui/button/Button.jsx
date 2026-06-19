import "./button.css";

const VARIANT_CLASS = {
  primary: "button--primary",
  ghost: "button--ghost",
  outline: "button--outline",
  icon: "button--icon",
};

export default function Button({
  variant = "primary",
  className = "",
  onClick,
  children,
  type = "button",
  disabled = false,
  "aria-label": ariaLabel,
  "aria-pressed": ariaPressed,
}) {
  const variantClass = VARIANT_CLASS[variant] ?? VARIANT_CLASS.primary;

  return (
    <button
      className={["button", variantClass, className].filter(Boolean).join(" ")}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-pressed={ariaPressed}
    >
      {children}
    </button>
  );
}
