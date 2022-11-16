import React, { useCallback } from 'react';
import { ListRenderItemInfo, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { Button } from '../../components';
import { categories } from '../SelectProducts/data';
import { ICategory } from '../SelectProducts/types';

import * as S from './styles';

export const RegisteredCategories = () => {
  const theme = useTheme();

  const renderCategory = useCallback(
    ({ item: category }: ListRenderItemInfo<ICategory>) => {
      return (
        <Button.Root type="unfilled" align="start">
          <Button.Text color={theme.colors.dark}>{category.name}</Button.Text>
          <Button.Icon>
            <S.CategoryButtonIcon name="chevron-right" />
          </Button.Icon>
        </Button.Root>
      );
    },
    [theme.colors.dark],
  );

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <S.Container>
        <S.Content>
          <S.Categories
            data={categories}
            keyExtractor={category => String(category.id)}
            renderItem={renderCategory}
          />
        </S.Content>
      </S.Container>
    </>
  );
};
