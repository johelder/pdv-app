import React from 'react';

import { NavigationButton } from './components/NavigationButton';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationButton />
    </ThemeProvider>
  );
};
