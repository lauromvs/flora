import React, { useState, useEffect } from 'react';

import HeaderAdmin from '../../components/HeaderAdmin';

import api from '../../services/api';

import ProductAdmin from '../../components/ProductAdmin';
import ModalAddProduct from '../../components/ModalAddProduct';
import ModalEditProduct from '../../components/ModalEditProduct';

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
  const [editingProduct, setEditingProduct] = useState<IProduct>(
    {} as IProduct,
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get('/products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

  async function handleAddProduct(
    product: Omit<IProduct, 'id' | 'available'>,
  ): Promise<void> {
    try {
      const response = await api.post('/products', {
        ...product,
        available: true,
      });

      setProducts([...products, response.data]);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleUpdateProduct(
    product: Omit<IProduct, 'id' | 'available'>,
  ): Promise<void> {
    try {
      const response = await api.put(`/products/${editingProduct.id}`, {
        ...editingProduct,
        ...product,
      });

      setProducts(
        products.map(mappedProduct =>
          mappedProduct.id === editingProduct.id
            ? { ...response.data }
            : mappedProduct,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteProduct(id: string): Promise<void> {
    try {
      await api.delete(`/products/${id}`);

      setProducts(products.filter(product => product.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  function handleEditProduct(product: IProduct): void {
    setEditingProduct(product);
    toggleEditModal();
  }

  return (
    <>
      <HeaderAdmin openModal={toggleModal} />
      <ModalAddProduct
        isOpen={modalOpen}
        setIsOpen={toggleModal}
        handleAddProduct={handleAddProduct}
      />
      <ModalEditProduct
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        editingProduct={editingProduct}
        handleUpdateProduct={handleUpdateProduct}
      />

      <ProductsContainer data-testid="products-list">
        {products &&
          products.map(product => (
            <ProductAdmin
              key={product.id}
              product={product}
              handleDelete={handleDeleteProduct}
              handleEditProduct={handleEditProduct}
            />
          ))}
      </ProductsContainer>
    </>
  );
};

export default AdminDashboard;
