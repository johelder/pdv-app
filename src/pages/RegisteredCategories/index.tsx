import React, { useCallback, useEffect, useState } from 'react';
import { ListRenderItemInfo, StatusBar, ActivityIndicator } from 'react-native';

import { Button } from '../../components';
import { category } from '../../services/category';

import { ICategory } from '../SelectProducts/types';
import { TRegisteredCategoriesProps } from './types';
import { TPageStatus } from '../../types/general';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const RegisteredCategories = ({
  navigation,
}: TRegisteredCategoriesProps) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');
  const theme = useTheme();

  const handleRedirectToRegisteredProducts = useCallback(
    (categoryId: number, categoryName: string) => {
      navigation.navigate('RegisteredProducts', { categoryId, categoryName });
    },
    [navigation],
  );

  const getCategories = useCallback(async () => {
    setPageStatus('loading');

    const response = await category.findAll();

    if (!response.ok) {
      setPageStatus('error');

      return;
    }

    setCategories(response.data);
    setPageStatus('success');
  }, []);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  const renderCategory = useCallback(
    ({ item: category }: ListRenderItemInfo<ICategory>) => {
      return (
        <Button.Root
          type="unfilled"
          align="start"
          onPress={() =>
            handleRedirectToRegisteredProducts(category.id, category.name)
          }
        >
          <Button.Text color={theme.colors.dark}>{category.name}</Button.Text>
          <Button.Icon>
            <S.CategoryButtonIcon name="chevron-right" />
          </Button.Icon>
        </Button.Root>
      );
    },
    [handleRedirectToRegisteredProducts, theme.colors.dark],
  );

  if (pageStatus === 'loading') {
    return (
      <S.Container>
        <S.Content>
          <ActivityIndicator color={theme.colors.categories} />
        </S.Content>
      </S.Container>
    );
  }

  if (pageStatus === 'error') {
    return (
      <S.Container>
        <S.Content>
          <S.ErrorLabel>
            Ocorreu um erro ao listar as categorias, tente novamente mais tarde!
          </S.ErrorLabel>
        </S.Content>
      </S.Container>
    );
  }

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
