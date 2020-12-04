import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

interface IProduct {
  id: string;
  name: string;
  image: string;
  value: number;
  amount: number;
  quantity: number;
  available: boolean;
}

interface ICartContext {
  products: IProduct[];
  addToCart(item: Omit<IProduct, 'quantity'>): void;
  removeFromCart(item: Omit<IProduct, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<ICartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const storageProducts = localStorage.getItem('@Flora:products');

      if (storageProducts) {
        setProducts([...JSON.parse(storageProducts)]);
      }
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    product => {
      const productExists = products.find(p => p.id === product.id);

      if (productExists) {
        setProducts(
          products.map(p => {
            if (p.id === product.id) {
              if (p.quantity < p.amount) {
                return { ...product, quantity: p.quantity + 1 };
              }
            }
            return p;
          }),
        );
      } else {
        setProducts([...products, { ...product, quantity: 1 }]);
      }

      localStorage.setItem('@Flora:products', JSON.stringify(products));
    },
    [products],
  );

  const removeFromCart = useCallback(
    product => {
      // const productExists = products.find(p => p.id === product.id);
      const productIndex = products.findIndex(p => p.id === product.id);
      const newProducts = products.splice(productIndex, 1);

      setProducts(newProducts);

      localStorage.setItem('@Flora:products', JSON.stringify(products));
    },
    [products],
  );

  const increment = useCallback(
    id => {
      const newProducts = products.map(product => {
        if (product.id === id) {
          if (product.quantity < product.amount) {
            return { ...product, quantity: product.quantity + 1 };
          }
        }
        return product;
      });

      setProducts(newProducts);

      localStorage.setItem('@Flora:products', JSON.stringify(newProducts));
    },
    [products],
  );

  const decrement = useCallback(
    id => {
      const newProducts = products.map(product => {
        if (product.id === id) {
          if (product.quantity > 1) {
            return { ...product, quantity: product.quantity - 1 };
          }
        }
        return product;
      });

      setProducts(newProducts);

      localStorage.setItem('@Flora:products', JSON.stringify(newProducts));
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, removeFromCart, increment, decrement, products }),
    [products, addToCart, removeFromCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): ICartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
