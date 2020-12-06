import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from './hooks/cart';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <CartProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </CartProvider>
  </>
);

export default App;
