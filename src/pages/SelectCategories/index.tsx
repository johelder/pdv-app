import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { category } from '../../services/category';
import { Button, Checkbox } from '../../components';
import { SelectCategoriesContext } from '../../contexts/selectCategories';

import { ICategory } from '../SelectProducts/types';
import { TSelectCategoriesProps } from './types';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const SelectCategories = ({ navigation }: TSelectCategoriesProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const { toggleCategory, isAddedCategory } = useContext(
    SelectCategoriesContext,
  );
  const isScreenFocused = useIsFocused();

  const theme = useTheme();

  const handleRedirectToRegisterProduct = () => {
    navigation.goBack();
  };

  const handleRedirectToRegisterCategory = () => {
    navigation.navigate('RegisterCategory', { redirect: 'RegisterCategory' });
  };

  const getCategories = useCallback(async () => {
    const response = await category.findAll();

    if (!response.ok) {
      return;
    }

    setCategories(response.data);
  }, []);

  useEffect(() => {
    if (isScreenFocused) {
      getCategories();
    }
  }, [getCategories, isScreenFocused]);

  const renderCategory = useCallback(
    ({ item: category }: ListRenderItemInfo<ICategory>) => {
      return (
        <S.CategoryContainer>
          <S.CategoryName>{category.name}</S.CategoryName>
          <Checkbox
            type="square"
            isChecked={isAddedCategory(category.id)}
            onPress={() => toggleCategory(category.id)}
          />
        </S.CategoryContainer>
      );
    },
    [isAddedCategory, toggleCategory],
  );

  return (
    <S.Container>
      <S.Content>
        <S.CategoriesContainer>
          <S.CategoriesContent>
            <Button.Root
              type="outline"
              color={theme.colors.categories}
              onPress={handleRedirectToRegisterCategory}
            >
              <Button.Icon>
                <S.RegisterCategoryIcon name="plus" />
              </Button.Icon>

              <Button.Text color={theme.colors.categories}>
                Nova categoria
              </Button.Text>
            </Button.Root>

            <S.Categories
              data={categories}
              renderItem={renderCategory}
              keyExtractor={category => String(category.id)}
            />
          </S.CategoriesContent>
        </S.CategoriesContainer>

        <Button.Root
          type="filled"
          color={theme.colors.categories}
          onPress={handleRedirectToRegisterProduct}
        >
          <Button.Text color={theme.colors.light}>Salvar</Button.Text>
        </Button.Root>
      </S.Content>
    </S.Container>
  );
};
