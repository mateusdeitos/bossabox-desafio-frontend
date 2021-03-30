/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable react/no-children-prop */
/* eslint-disable no-restricted-globals */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import Routes from './routes';
import { ContextBannerProvider } from './hooks/useContextBanner';
import { useDarkMode } from './hooks/useDarkMode';
import themes from './styles/themes';
import { ConfirmationServiceProvider } from './hooks/useConfirmation';

const App = () => {
  const { currentTheme } = useDarkMode();
  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        <ConfirmationServiceProvider>
          <ContextBannerProvider>
            <GlobalStyle />
            <Routes />
          </ContextBannerProvider>
        </ConfirmationServiceProvider>
      </ThemeProvider>
    </Router>
  );
};
export default App;
