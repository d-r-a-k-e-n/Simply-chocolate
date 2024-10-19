import ProductCard from "../productCard/ProductCard";
import "./productsSection.css";

export default function ProductsSection() {
  //   let swiper = new Swiper(".swiper", {
  //     // Optional parameters
  //     direction: "horizontal",

  //     // If we need pagination
  //     pagination: {
  //       el: ".swiper-pagination",
  //       clickable: true,
  //     },
  //     slidesPerView: 1,
  //     spaceBetween: 16,
  //     // Responsive breakpoints
  //     breakpoints: {
  //       768: {
  //         slidesPerView: 2,
  //         spaceBetween: 16,
  //       },
  //       1200: {
  //         slidesPerView: 3,
  //         spaceBetween: 28,
  //       },
  //     },
  //     slideToClickedSlide: true,
  //     loop: true,
  //     loopFillGroupWithBlank: true,
  //     autoplay: {
  //       delay: 1500,
  //       disableOnInteraction: false,
  //     },
  //   });
  return (
    <section className="products-section" id="products-section">
      <div className="container">
        <h2 className="products-section__title">
          Our <span className="title-accent">products</span>
        </h2>
        <ul className="products-section__list">
          <ProductCard />
          <ProductCard />
          {/* <ProductCard />
          <ProductCard /> */}
        </ul>
      </div>
    </section>
  );
}
