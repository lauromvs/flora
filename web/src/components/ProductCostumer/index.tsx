import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { useCart } from '../../hooks/cart';

import { Container } from './styles';

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
}

const ProductCostumer: React.FC<IProps> = ({ product }: IProps) => {
  const { addToCart } = useCart();
  function isAvailable(): boolean {
    return !!product.available;
  }

  function handleIncrement(addProduct: IProduct): void {
    addToCart(addProduct);
  }

  return (
    <Container available={isAvailable()}>
      <header>
        <img src={product.image} alt={product.name} />
      </header>
      <section className="body">
        <h2>{product.name}</h2>
        <p>
          {isAvailable()
            ? `${product.amount} unidades disponíveis`
            : 'Indisponível'}
        </p>
      </section>
      <section className="footer">
        <p className="price">
          R$ <b>{product.value}</b>
        </p>
        <button type="button" onClick={() => handleIncrement(product)}>
          <div className="icon">
            <FiPlusSquare size={32} />
          </div>
        </button>
      </section>
    </Container>
  );
};

export default ProductCostumer;
