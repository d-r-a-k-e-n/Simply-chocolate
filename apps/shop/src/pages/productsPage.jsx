import ProductCard from '../components/card/productCard/ProductCard';
import ProductCardSkeleton from '../components/card/productCard/ProductCardSkeleton';
import '../components/section/productsSection/productsSection.css';
import 'swiper/css';
import { useEffect, useState } from 'react';
import { productService } from '../services/product.service';
import { useCart } from '../context/CartContext';

const SKELETON_COUNT = 4;

export default function ProductsPage() {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart, openCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const product = await productService.getAll();
        if (product && product.data) {
          setProductData(product.data);
        } else if (Array.isArray(product)) {
          setProductData(product);
        }
      } catch (error) {
        console.error('Error: ', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <section className="products-section" id="products-section">
      <div className="container">
        <h2 className="products-section__title">
          All <span className="title-accent">products</span>
        </h2>
        <ul className="products-section__list">
          {isLoading
            ? Array.from({ length: SKELETON_COUNT }, (_, index) => (
                <ProductCardSkeleton />
              ))
            : productData.map(
                ({ id, name, images, description, default_price }) => (
                  <ProductCard
                    title={name}
                    photo={images?.[0]}
                    ingredient={description}
                    prise={default_price.unit_amount}
                    onBuy={() => {
                      addToCart({
                        id,
                        name,
                        image: images?.[0] ?? '',
                        description,
                        price: default_price.unit_amount,
                        priceId: default_price.id,
                      });
                      openCart();
                    }}
                  />
                ),
              )}
        </ul>
      </div>
    </section>
  );
}
