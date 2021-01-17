/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes />
    </Router>
  );
};
export default App;
