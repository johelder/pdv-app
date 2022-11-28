import React from 'react';
import { SelectCategoriesProvider } from './selectCategories';
import { IAppProviderProps } from './types';

export const AppProvider = ({ children }: IAppProviderProps) => {
  return <SelectCategoriesProvider>{children}</SelectCategoriesProvider>;
};
