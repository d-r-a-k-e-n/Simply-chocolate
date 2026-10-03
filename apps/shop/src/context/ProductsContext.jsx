import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { productService } from '../services/product.service';

const ProductsContext = createContext(null);

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

export function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await productService.getAll();
        const list = Array.isArray(response)
          ? response
          : Array.isArray(response?.data)
            ? response.data
            : [];
        setProducts(list.map(normalizeProduct));
      } catch (err) {
        console.error('Error: ', err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const getProductById = useCallback(
    (id) => products.find((product) => product.id === id) ?? null,
    [products],
  );

  const types = useMemo(
    () =>
      [
        ...new Set(products.map((product) => product.type).filter(Boolean)),
      ].sort(),
    [products],
  );

  const value = useMemo(
    () => ({
      products,
      isLoading,
      error,
      types,
      getProductById,
    }),
    [products, isLoading, error, types, getProductById],
  );

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProducts must be used within ProductsProvider');
  }

  return context;
}
