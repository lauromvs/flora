import React, { useCallback } from 'react';
import { FiPlus, FiMinus, FiTrash } from 'react-icons/fi';

import { useHistory } from 'react-router-dom';
import { RiShoppingCart2Line } from 'react-icons/ri';
import HeaderCostumer from '../../components/HeaderCostumer';

// import api from '../../services/api';
import {
  Container,
  Product,
  ProductContent,
  ActionContainer,
  FooterContainer,
} from './styles';

import { useCart } from '../../hooks/cart';

interface IProduct {
  id: string;
  name: string;
  image: string;
  value: number;
  amount: number;
  quantity: number;
  available: boolean;
}

const Cart: React.FC = () => {
  const history = useHistory();
  const { removeFromCart, products, increment, decrement } = useCart();

  function handleIncrement(id: string): void {
    increment(id);
  }

  function handleDecrement(id: string): void {
    decrement(id);
  }

  function handleDelete(item: IProduct): void {
    removeFromCart(item);
  }

  function handleBuy(): void {
    console.log('comprou');
    products.map(product => {
      console.log(product.id);
      console.log(product.quantity);
      console.log(product.amount);
    });
  }

  function handleCancel(): void {
    history.goBack();
  }

  const formatValue = useCallback((value: number) => {
    return parseFloat(String(value)).toFixed(2);
  }, []);

  return (
    <>
      <HeaderCostumer />

      <Container data-testid="products-list">
        {products.map(item => (
          <Product key={item.id}>
            <img src={item.image} alt="Foto do produto" />
            <ProductContent>
              <h1>{item.name}</h1>
              <p>R$ {formatValue(item.value)}</p>
              <h2>
                {`${item.quantity}x `} R${' '}
                {formatValue(item.value * item.quantity)}
              </h2>
            </ProductContent>

            <ActionContainer>
              <button type="button" onClick={() => handleDelete(item)}>
                <FiTrash size={24} />
              </button>
              <div>
                <button type="button" onClick={() => handleDecrement(item.id)}>
                  <FiMinus size={20} />
                </button>
                <button type="button" onClick={() => handleIncrement(item.id)}>
                  <FiPlus size={20} />
                </button>
              </div>
            </ActionContainer>
          </Product>
        ))}

        <p>5 itens</p>
        <p>R$ xx.oo</p>
      </Container>
      <FooterContainer>
        <div>
          <button type="button" onClick={handleCancel}>
            Cancelar
          </button>
          <button type="button" onClick={handleBuy}>
            <div className="text">Finalizar pedido</div>
            <div className="icon">
              <RiShoppingCart2Line size={24} />
            </div>
          </button>
        </div>
      </FooterContainer>
    </>
  );
};

export default Cart;
