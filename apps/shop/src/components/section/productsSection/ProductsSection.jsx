import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import ProductCard from "../../card/productCard/ProductCard";
import "./productsSection.css";
import "swiper/css";
import { useEffect, useState } from 'react';
import { productService } from '../../../services/product.service';
import { useCart } from '../../../context/CartContext';

export default function ProductsSection() {
  const [productData, setProductData] = useState([]);
  const { addToCart, openCart } = useCart();

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
      }
    }

    fetchData();
  }, []);

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
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
          >
            {productData.map(
              ({ id, name, images, description, default_price }) => (
                <SwiperSlide key={id}>
                  <ProductCard
                    title={name}
                    photo={images[0]}
                    ingredient={description}
                    prise={default_price.unit_amount}
                    onBuy={() => {
                      addToCart({
                        id,
                        name,
                        image: images[0],
                        description,
                        price: default_price.unit_amount,
                        priceId: default_price.id,
                      });
                      openCart();
                    }}
                  />
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </ul>
      </div>
    </section>
  );
}
