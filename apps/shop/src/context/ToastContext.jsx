import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import ToastContainer from "../components/ui/toast/ToastContainer";

const ToastContext = createContext(null);

let toastId = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((current) => current.filter((toast) => toast.id !== id));
  }, []);

  const showToast = useCallback(
    ({ message, type = "success", duration = 4000 }) => {
      const id = ++toastId;

      setToasts((current) => [...current, { id, message, type }]);

      window.setTimeout(() => {
        removeToast(id);
      }, duration);

      return id;
    },
    [removeToast],
  );

  const value = useMemo(
    () => ({ showToast, removeToast }),
    [showToast, removeToast],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} onClose={removeToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }

  return context;
}
