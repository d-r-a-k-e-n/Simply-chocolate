import { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import PaymentResultModal from "../modal/paymentResultModal/PaymentResultModal";

export default function CheckoutReturnHandler() {
  const { clearCart } = useCart();
  const [paymentStatus, setPaymentStatus] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const checkoutStatus = params.get("checkout");

    if (!checkoutStatus) return;

    if (checkoutStatus === "success") {
      clearCart();
      setPaymentStatus("success");
    }

    if (checkoutStatus === "cancel") {
      setPaymentStatus("cancel");
    }

    window.history.replaceState({}, "", window.location.pathname);
  }, [clearCart]);

  return (
    <PaymentResultModal
      isOpen={Boolean(paymentStatus)}
      status={paymentStatus}
      onClose={() => setPaymentStatus(null)}
    />
  );
}
