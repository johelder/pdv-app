import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { AppProvider } from './contexts';

import { store } from './store';
import { Routes } from './routes';
import { theme } from './styles/theme';

export const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppProvider>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </Provider>
      </AppProvider>
    </GestureHandlerRootView>
  );
};
