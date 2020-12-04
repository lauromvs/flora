import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/logo.png';

const HeaderCostumer: React.FC = () => {
  return (
    <Container>
      <header>
        <a href="/">
          <img src={Logo} alt="Flora" />
        </a>
      </header>
    </Container>
  );
};

export default HeaderCostumer;
