import { ReactNode } from 'react';

export type TSelectedCategories = number[];

export interface ISelectCategoriesContext {
  selectedCategories: TSelectedCategories;
  toggleCategory: (categoryId: number) => void;
  isAddedCategory: (categoryId: number) => boolean;
  clearCategories: () => void;
}

export interface ISelectCategoriesProviderProps {
  children: ReactNode;
}
