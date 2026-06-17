import "./button.css";

export default function Button({ className, onClick, children, type = "button", disabled = false }) {
  return (
    <button className={className} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
}
