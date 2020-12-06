import React, { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { FiPlus, FiMinus, FiTrash } from 'react-icons/fi';
import { RiShoppingCart2Line } from 'react-icons/ri';

import Header from '../../components/Header';
import { useCart } from '../../hooks/cart';

import api from '../../services/api';

import {
  Container,
  Product,
  ProductContent,
  ActionContainer,
  FooterContainer,
} from './styles';

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
  const {
    removeFromCart,
    products,
    increment,
    decrement,
    setProducts,
  } = useCart();

  const cartTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsSubtotal = product.value * product.quantity;

      return accumulator + productsSubtotal;
    }, 0);

    return total;
  }, [products]);

  const totalItensInCart = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsQuantity = product.quantity;

      return accumulator + productsQuantity;
    }, 0);

    return total;
  }, [products]);

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
    products.map(async product => {
      const { id, name, quantity } = product;
      let { amount, available } = product;

      amount -= quantity;
      if (amount === 0) {
        available = false;
      }

      const body = {
        name,
        amount,
        available,
      };

      await api.put(`products/${id}`, body);
    });

    alert('Compra realizada com sucesso!');
    setProducts([]);
    localStorage.removeItem('@Flora:products');
    history.push('/');
  }

  function handleCancel(): void {
    history.goBack();
  }

  const formatValue = useCallback((value: number) => {
    return parseFloat(String(value)).toFixed(2);
  }, []);

  return (
    <>
      <Header />

      <Container>
        {products.map(item => (
          <Product key={item.id}>
            <img
              src={`http://127.0.0.1:3333/files/${item.image}`}
              alt="Foto do produto"
            />
            <ProductContent>
              <h1>{item.name}</h1>
              <p>R$ {formatValue(item.value)}</p>
              <h2>
                {`${item.quantity}x `} R${' '}
                {formatValue(item.value * item.quantity)}
              </h2>
            </ProductContent>

            <ActionContainer
              minusDisable={item.quantity === 1}
              plusDisable={item.quantity >= item.amount}
            >
              <button type="button" onClick={() => handleDelete(item)}>
                <FiTrash size={24} />
              </button>
              <div>
                <button
                  id="minusButton"
                  type="button"
                  onClick={() => handleDecrement(item.id)}
                >
                  <FiMinus size={20} />
                </button>
                <button
                  id="plusButton"
                  type="button"
                  onClick={() => handleIncrement(item.id)}
                >
                  <FiPlus size={20} />
                </button>
              </div>
            </ActionContainer>
          </Product>
        ))}

        <p>{totalItensInCart} itens</p>
        <strong>R$ {cartTotal.toFixed(2)}</strong>
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
