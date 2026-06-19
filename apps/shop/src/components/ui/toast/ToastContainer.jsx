import Button from "../button/Button";
import "./toast.css";

const TYPE_LABEL = {
  success: "Success",
  error: "Error",
  info: "Info",
};

export default function ToastContainer({ toasts, onClose }) {
  if (toasts.length === 0) return null;

  return (
    <div className="toast-container" aria-live="polite" aria-atomic="true">
      {toasts.map(({ id, message, type }) => (
        <div key={id} className={`toast toast--${type}`} role="status">
          <div className="toast__content">
            <p className="toast__title">{TYPE_LABEL[type] ?? TYPE_LABEL.info}</p>
            <p className="toast__message">{message}</p>
          </div>
          <Button
            variant="icon"
            className="toast__close"
            onClick={() => onClose(id)}
            aria-label="Close notification"
          >
            ×
          </Button>
        </div>
      ))}
    </div>
  );
}
