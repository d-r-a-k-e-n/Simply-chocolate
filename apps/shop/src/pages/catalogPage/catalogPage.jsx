import { useEffect, useMemo, useState } from 'react';
import ProductCard from '../../components/card/productCard/ProductCard';
import ProductCardSkeleton from '../../components/card/productCard/ProductCardSkeleton';
import '../../components/section/productsSection/productsSection.css';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../../context/ProductsContext';
import './catalogPage.css';

const SKELETON_COUNT = 4;

function matchesSearch(product, query) {
  if (!query) return true;

  const haystack = [
    product.name,
    product.description,
    product.type,
    String(product.price),
    (product.price / 100).toFixed(2),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();

  return haystack.includes(query);
}

export default function CatalogPage() {
  const { products, isLoading } = useProducts();
  const { addToCart, openCart } = useCart();
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('none');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const list = products.filter((product) => matchesSearch(product, query));

    if (sortOrder === 'asc') {
      return [...list].sort((a, b) => a.price - b.price);
    }

    if (sortOrder === 'desc') {
      return [...list].sort((a, b) => b.price - a.price);
    }

    return list;
  }, [products, search, sortOrder]);

  return (
    <section className="products-section" id="products-section">
      <div className="container">
        <h2 className="products-section__title">
          All <span className="title-accent">products</span>
        </h2>

        <div className="products-page__controls">
          <input
            className="products-page__search"
            type="search"
            placeholder="Search by name, type or price..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search products"
          />

          <div
            className="products-page__sort"
            role="group"
            aria-label="Sort by price"
          >
            <button
              type="button"
              className={`products-page__filter${sortOrder === 'none' ? ' products-page__filter--active' : ''}`}
              onClick={() => setSortOrder('none')}
            >
              Default
            </button>
            <button
              type="button"
              className={`products-page__filter${sortOrder === 'asc' ? ' products-page__filter--active' : ''}`}
              onClick={() => setSortOrder('asc')}
            >
              Price ↑
            </button>
            <button
              type="button"
              className={`products-page__filter${sortOrder === 'desc' ? ' products-page__filter--active' : ''}`}
              onClick={() => setSortOrder('desc')}
            >
              Price ↓
            </button>
          </div>
        </div>

        <ul className="products-section__list">
          {isLoading
            ? Array.from({ length: SKELETON_COUNT }, (_, index) => (
                <ProductCardSkeleton key={`skeleton-${index}`} />
              ))
            : filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
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
              ))}
        </ul>

        {!isLoading && filteredProducts.length === 0 && (
          <p className="products-page__empty">No products match your search.</p>
        )}
      </div>
    </section>
  );
}
