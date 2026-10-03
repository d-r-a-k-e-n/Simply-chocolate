import MainPage from './pages/mainPage';
import ProductsPage from './pages/productsPage';
import OrderModal from './components/modal/orderModal/OrderModal';
import CheckoutReturnHandler from './components/checkout/CheckoutReturnHandler';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <ToastProvider>
      <CartProvider>
        <CheckoutReturnHandler />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
        <Footer />
        <OrderModal />
      </CartProvider>
    </ToastProvider>
  );
}
