/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import Routes from './routes';
import useColorMode from './hooks/useColorMode';

const App = () => {
  const [colorMode] = useColorMode();
  return (
    <Router>
      <Routes />
      <GlobalStyle theme={colorMode} />
    </Router>
  );
};
export default App;
