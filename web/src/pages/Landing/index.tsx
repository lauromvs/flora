import React from 'react';
import { Link } from 'react-router-dom';

import { RiAdminLine, RiShoppingCart2Line } from 'react-icons/ri';

import Logo from '../../assets/logo-landing.png';

import {
  Container,
  Content,
  Background,
  LogoContainer,
  ButtonContainer,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={Logo} alt="Flora" />
          <h1>Plantas, flores e decorações</h1>
        </LogoContainer>
        <ButtonContainer>
          <Link to="/admin">
            <RiAdminLine size={20} />
            Administrador
          </Link>
          <Link to="/shop">
            <RiShoppingCart2Line size={20} />
            Cliente
          </Link>
        </ButtonContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default Landing;
