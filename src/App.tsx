import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/Global';
import Header from './components/Header/index';

import Routes from './routes';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
