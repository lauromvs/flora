import React, { useState, useEffect } from 'react';

import Header from '../../components/Header';
import ProductAdmin from '../../components/ProductAdmin';

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

const AdminDashboard: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  async function handleDeleteProduct(id: string): Promise<void> {
    try {
      await api.delete(`/products/${id}`);

      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Header isAdmin />

      <ProductsContainer>
        {products &&
          products.map(product => (
            <ProductAdmin
              key={product.id}
              product={product}
              handleDelete={handleDeleteProduct}
            />
          ))}
      </ProductsContainer>
    </>
  );
};

export default AdminDashboard;
