import React, { useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { RiShoppingCart2Line } from 'react-icons/ri';
import { useCart } from '../../hooks/cart';

import { Container, CartButton } from './styles';

const FloatingCart: React.FC = () => {
  const history = useHistory();
  const { products } = useCart();

  const cartTotal = useMemo(() => {
    const total = products.reduce((accumulator, product) => {
      const productsSubtotal = product.value * product.amount;

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

  return (
    <Container>
      <footer>
        <CartButton onClick={() => history.push('/cart')}>
          <RiShoppingCart2Line size={34} />
          {totalItensInCart} itens no carrinho
        </CartButton>
        <h1>R$ {cartTotal.toFixed(2)}</h1>
      </footer>
    </Container>
  );
};

export default FloatingCart;
