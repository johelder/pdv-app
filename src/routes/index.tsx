import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackRoutes } from './app.stack.routes';

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppStackRoutes />
    </NavigationContainer>
  );
};
