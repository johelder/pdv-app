import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';

import { Button, Checkbox } from '../../components';
import { categories } from './data';
import { ICategory } from '../SelectProducts/types';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const SelectCategories = () => {
  const theme = useTheme();

  const renderCategory = useCallback(
    ({ item: category }: ListRenderItemInfo<ICategory>) => {
      return (
        <S.CategoryContainer>
          <S.CategoryName>{category.name}</S.CategoryName>
          <Checkbox type="square" isChecked={false} />
        </S.CategoryContainer>
      );
    },
    [],
  );

  return (
    <S.Container>
      <S.Content>
        <S.CategoriesContainer>
          <S.CategoriesContent>
            <Button.Root type="outline" color={theme.colors.categories}>
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

        <Button.Root type="filled" color={theme.colors.categories}>
          <Button.Text color={theme.colors.light}>Salvar</Button.Text>
        </Button.Root>
      </S.Content>
    </S.Container>
  );
};
