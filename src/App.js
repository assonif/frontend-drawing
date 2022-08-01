import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Provider from './provider';

import Router from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Router />
        <GlobalStyles />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
