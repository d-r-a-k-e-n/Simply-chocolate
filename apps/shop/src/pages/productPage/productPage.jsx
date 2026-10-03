import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/ui/button/Button';
import { useCart } from '../../context/CartContext';
import { productService } from '../../services/product.service';
import './productPage.css';
import Loader from '../../components/ui/loader/Loader';

function normalizeProduct(product) {
  return {
    id: product.id,
    name: product.name ?? '',
    description: product.description ?? '',
    type: product.description ?? '',
    image: product.images?.[0] ?? '',
    price: product.default_price?.unit_amount ?? 0,
    priceId: product.default_price?.id ?? '',
  };
}

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart, openCart } = useCart();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    let cancelled = false;

    async function fetchProduct() {
      setIsLoading(true);

      try {
        const data = await productService.getById(id);
        if (!cancelled) {
          setProduct(normalizeProduct(data));
        }
      } catch (error) {
        console.error('Error: ', error);
        if (!cancelled) {
          setProduct(null);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    fetchProduct();

    return () => {
      cancelled = true;
    };
  }, [id]);

  return (
    <section className="product-page">
      <div className="container product-page__container">
        <Link to="/products" className="product-page__back">
          ← Back to catalog
        </Link>

        {isLoading ? (
          <Loader />
        ) : (
          <div className="product-page__content">
            {product.image ? (
              <div className="product-page__image-wrap">
                <img
                  className="product-page__image"
                  src={product.image}
                  alt={product.name}
                />
              </div>
            ) : null}

            <div className="product-page__info">
              <p className="product-page__type">{product.type}</p>
              <h1 className="product-page__title">{product.name}</h1>
              <p className="product-page__description">{product.description}</p>
              <p className="product-page__price">
                {(product.price / 100).toFixed(2)} $
              </p>
              <Button
                onClick={() => {
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
              >
                Buy
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
