import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { Container } from './styles';

import Logo from '../../assets/logo.png';

interface IHeaderProps {
  openModal: () => void;
}

const HeaderAdmin: React.FC<IHeaderProps> = ({ openModal }) => (
  <Container>
    <header>
      <a href="/">
        <img src={Logo} alt="Flora" />
      </a>
      <nav>
        <div>
          <button type="button" onClick={openModal}>
            <div className="text">Novo Produto</div>
            <div className="icon">
              <FiPlusSquare size={24} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  </Container>
);

export default HeaderAdmin;
