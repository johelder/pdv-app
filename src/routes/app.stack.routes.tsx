import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TRootStackParamList } from './types';

import {
  Home,
  NewSale,
  RegisterProduct,
  SelectProducts,
  SelectCategories,
} from '../pages';

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
      <Stack.Group
        screenOptions={{
          headerBackTitle: '',
          headerTitleStyle: {
            fontFamily: theme.fonts.primary.bold,
          },
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
          headerTintColor: theme.colors.primary,
        }}
      >
        <Stack.Screen
          name="NewSale"
          component={NewSale}
          options={{
            title: 'Nova venda',
          }}
        />
        <Stack.Screen
          name="SelectProducts"
          component={SelectProducts}
          options={{
            title: 'Selecionar produtos',
          }}
        />
        <Stack.Screen
          name="RegisterProduct"
          component={RegisterProduct}
          options={{
            title: 'Cadastrar produto',
          }}
        />
        <Stack.Screen
          name="SelectCategories"
          component={SelectCategories}
          options={{
            title: 'Selecionar categoria',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
