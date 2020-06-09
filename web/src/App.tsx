import React from 'react';
import { BrowserRouter as Browser } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './styles/global';

import AppProvider from './hooks';

const App: React.FC = () => (
  <Browser>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyle />
  </Browser>
);

export default App;
