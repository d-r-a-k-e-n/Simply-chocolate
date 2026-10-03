import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProductCard from '../../card/productCard/ProductCard';
import ProductCardSkeleton from '../../card/productCard/ProductCardSkeleton';
import './productsSection.css';
import 'swiper/css';
import { useCart } from '../../../context/CartContext';
import { useProducts } from '../../../context/ProductsContext';
import Button from '../../ui/button/Button';
import { useNavigate } from 'react-router-dom';

const SKELETON_COUNT = 4;

export default function ProductsSection() {
  const { products, isLoading } = useProducts();
  const { addToCart, openCart } = useCart();
  const navigate = useNavigate();

  return (
    <section className="products-section" id="products-section">
      <div className="container">
        <h2 className="products-section__title">
          Our <span className="title-accent">products</span>
        </h2>
        <ul className="products-section__list">
          <Swiper
            breakpoints={{
              1140: { slidesPerView: 4, spaceBetween: 18 },
              880: { slidesPerView: 3, spaceBetween: 18 },
              768: { slidesPerView: 2, spaceBetween: 18 },
              375: { slidesPerView: 1, spaceBetween: 10 },
            }}
            modules={[Autoplay]}
            autoplay={
              isLoading
                ? false
                : {
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
            }
          >
            {isLoading
              ? Array.from({ length: SKELETON_COUNT }, (_, index) => (
                  <SwiperSlide key={`product-skeleton-${index}`}>
                    <ProductCardSkeleton />
                  </SwiperSlide>
                ))
              : products.map((product) => (
                  <SwiperSlide key={product.id}>
                    <ProductCard
                      title={product.name}
                      photo={product.image}
                      ingredient={product.description}
                      prise={product.price}
                      to={`/products/${product.id}`}
                      onBuy={() => {
                        addToCart({
                          id: product.id,
                          name: product.name,
                          image: product.image,
                          description: product.description,
                          price: product.price,
                          priceId: product.priceId,
                        });
                        openCart();
                      }}
                    />
                  </SwiperSlide>
                ))}
          </Swiper>
        </ul>
        <Button
          variant="outline"
          className="response-section__btn"
          onClick={() => navigate('/products')}
        >
          View all products
        </Button>
      </div>
    </section>
  );
}