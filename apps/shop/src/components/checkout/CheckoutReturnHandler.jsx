import { useEffect } from "react";
import { useCart } from "../../context/CartContext";

export default function CheckoutReturnHandler() {
  const { clearCart } = useCart();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const checkoutStatus = params.get("checkout");

    if (!checkoutStatus) return;

    if (checkoutStatus === "success") {
      clearCart();
      alert("Thank you for your order! Payment was successful.");
    }

    window.history.replaceState({}, "", window.location.pathname);
  }, [clearCart]);

  return null;
}
