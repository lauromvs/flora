import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import ProductCostumer from '../../components/ProductCostumer';
import FloatingCart from '../../components/FloatingCart';

import api from '../../services/api';

import { ProductsContainer } from './styles';

interface IProduct {
  id: string;
  name: string;
  image: string;
  value: number;
  amount: number;
  available: boolean;
}

const CostumerDashboard: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  return (
    <>
      <Header />

      <ProductsContainer>
        {products &&
          products.map(product => (
            <ProductCostumer key={product.id} product={product} />
          ))}
      </ProductsContainer>

      <FloatingCart />
    </>
  );
};

export default CostumerDashboard;
