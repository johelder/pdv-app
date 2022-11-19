import React, { useCallback, useState } from 'react';

import { createContext } from 'react';
import {
  ISelectCategoriesContext,
  ISelectCategoriesProviderProps,
  TSelectedCategories,
} from './types';

export const SelectCategoriesContext = createContext(
  {} as ISelectCategoriesContext,
);

export const SelectCategoriesProvider = ({
  children,
}: ISelectCategoriesProviderProps) => {
  const [selectedCategories, setSelectedCategories] =
    useState<TSelectedCategories>([]);

  const addCategory = (categoryId: number) => {
    setSelectedCategories(prevCategoriesAdded => [
      ...prevCategoriesAdded,
      categoryId,
    ]);
  };

  const removeCategory = useCallback(
    (categoryId: number) => {
      const filteredCategories = selectedCategories.filter(
        category => category !== categoryId,
      );

      setSelectedCategories(filteredCategories);
    },
    [selectedCategories],
  );

  const isAddedCategory = useCallback(
    (categoryId: number) => {
      const isAddedCategory = selectedCategories.find(
        category => category === categoryId,
      );

      return !!isAddedCategory;
    },
    [selectedCategories],
  );

  const toggleCategory = useCallback(
    (categoryId: number) => {
      const categoryAlreadyAdded = isAddedCategory(categoryId);

      if (categoryAlreadyAdded) {
        removeCategory(categoryId);

        return;
      }

      addCategory(categoryId);
    },
    [isAddedCategory, removeCategory],
  );

  const clearCategories = useCallback(() => {
    setSelectedCategories([]);
  }, []);

  return (
    <SelectCategoriesContext.Provider
      value={{
        selectedCategories,
        toggleCategory,
        isAddedCategory,
        clearCategories,
      }}
    >
      {children}
    </SelectCategoriesContext.Provider>
  );
};
