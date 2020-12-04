import React, { useState } from 'react';

import { FiEdit3, FiTrash } from 'react-icons/fi';

import { Container } from './styles';

import api from '../../services/api';

interface IProduct {
  id: string;
  name: string;
  image: string;
  value: number;
  amount: number;
  available: boolean;
}

interface IProps {
  product: IProduct;
  handleDelete: (id: string) => {};
  handleEditProduct: (product: IProduct) => void;
}

const ProductAdmin: React.FC<IProps> = ({
  product,
  handleDelete,
  handleEditProduct,
}: IProps) => {
  const [isAvailable, setIsAvailable] = useState(product.available);

  async function toggleAvailable(): Promise<void> {
    try {
      await api.put(`/products/${product.id}`, {
        ...product,
        available: !isAvailable,
      });

      setIsAvailable(!isAvailable);
    } catch (err) {
      console.log(err);
    }
  }

  function setEditingProduct(): void {
    handleEditProduct(product);
  }

  return (
    <Container available={isAvailable}>
      <header>
        <img src={product.image} alt={product.name} />
      </header>
      <section className="body">
        <h2>{product.name}</h2>
        <p>{product.id}</p>
        <p>
          {isAvailable
            ? `${product.amount} unidades disponíveis`
            : 'Indisponível'}
        </p>
        <p className="price">
          R$ <b>{product.value}</b>
        </p>
      </section>
      <section className="footer">
        <div className="icon-container">
          <button
            type="button"
            className="icon"
            onClick={() => setEditingProduct()}
            data-testid={`edit-product-${product.id}`}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(product.id)}
            data-testid={`remove-food-${product.id}`}
          >
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p>{isAvailable ? 'Disponível' : 'Indisponível'}</p>

          <label htmlFor={`available-switch-${product.id}`} className="switch">
            <input
              id={`available-switch-${product.id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={toggleAvailable}
              data-testid={`change-status-food-${product.id}`}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};

export default ProductAdmin;
