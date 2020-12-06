import React from 'react';

import { FiPlusSquare } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import { Container } from './styles';

import Logo from '../../assets/logo.png';

interface IHeaderProps {
  isAdmin?: boolean;
}

const HeaderAdmin: React.FC<IHeaderProps> = ({ isAdmin }) => {
  const history = useHistory();

  return (
    <Container>
      <header>
        <a href="/">
          <img src={Logo} alt="Flora" />
        </a>

        {isAdmin && (
          <nav>
            <div>
              <button
                type="button"
                onClick={() => history.push('/product-add')}
              >
                <div className="text">Novo Produto</div>
                <div className="icon">
                  <FiPlusSquare size={24} />
                </div>
              </button>
            </div>
          </nav>
        )}
      </header>
    </Container>
  );
};

export default HeaderAdmin;
