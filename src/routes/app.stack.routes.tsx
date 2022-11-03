import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TRootStackParamList } from './types';

import { Home, NewSale } from '../pages';
import { useTheme } from 'styled-components';

const Stack = createNativeStackNavigator<TRootStackParamList>();

export const AppStackRoutes = () => {
  const theme = useTheme();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="NewSale"
        component={NewSale}
        options={{
          title: 'Nova venda',
          headerBackTitle: '',
          headerTitleStyle: {
            fontFamily: theme.fonts.primary.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.primary,
        }}
      />
    </Stack.Navigator>
  );
};
