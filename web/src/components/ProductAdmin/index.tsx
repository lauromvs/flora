import React, { useState } from 'react';

import { FiEdit3, FiTrash, FiCamera } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
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
}

const ProductAdmin: React.FC<IProps> = ({ product, handleDelete }: IProps) => {
  const history = useHistory();
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

  const handleImageChange = (): void => {
    history.push({
      pathname: '/product-edit-img',
      state: product,
    });
  };

  function handleEditingProduct(): void {
    history.push({
      pathname: '/product-edit',
      state: product,
    });
  }

  return (
    <Container available={isAvailable}>
      <header>
        <img
          src={`http://127.0.0.1:3333/files/${product.image}`}
          alt={product.name}
        />
        <button type="button" onClick={handleImageChange}>
          <FiCamera />
        </button>
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
            onClick={() => handleEditingProduct()}
          >
            <FiEdit3 size={20} />
          </button>

          <button
            type="button"
            className="icon"
            onClick={() => handleDelete(product.id)}
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
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
};

export default ProductAdmin;
