import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ListRenderItemInfo } from 'react-native';

import { category } from '../../services/category';
import { Button, Product } from '../../components';
import { IProduct } from '../../components/Product/types';

import { TRegisteredProductsProps } from './types';
import { TPageStatus } from '../../types/general';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const RegisteredProducts = ({
  navigation,
  route,
}: TRegisteredProductsProps) => {
  const [products, setProducts] = useState<IProduct[] | undefined>([]);
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');

  const theme = useTheme();

  const categoryId = route.params.categoryId;

  const getProducts = useCallback(async () => {
    setPageStatus('loading');
    const response = await category.findById(categoryId);

    if (!response.ok) {
      setPageStatus('error');

      return;
    }

    setProducts(response.data?.products);
    setPageStatus('success');
  }, [categoryId]);

  const handleRedirectToRegisterProduct = useCallback(() => {
    navigation.navigate('RegisterProduct', {
      redirect: 'RegisteredCategories',
    });
  }, [navigation]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const renderProduct = useCallback(
    ({ item: product }: ListRenderItemInfo<IProduct>) => {
      return (
        <S.ProductContainer>
          <Product product={product} readonly />
        </S.ProductContainer>
      );
    },
    [],
  );

  const renderEmptyProducts = useCallback(() => {
    return (
      <Button.Root
        type="outline"
        color={theme.colors.products}
        onPress={handleRedirectToRegisterProduct}
      >
        <Button.Icon>
          <S.NewProductIcon name="plus" />
        </Button.Icon>

        <Button.Text color={theme.colors.products}>Novo produto</Button.Text>
      </Button.Root>
    );
  }, [handleRedirectToRegisterProduct, theme.colors.products]);

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
            Ocorreu um erro ao listar os produtos, tente novamente mais tarde!
          </S.ErrorLabel>
        </S.Content>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.Content>
        <S.ProductsContainer>
          <S.Products
            data={products}
            renderItem={renderProduct}
            keyExtractor={product => String(product.id)}
            numColumns={2}
            key={2}
            ListEmptyComponent={renderEmptyProducts}
          />
        </S.ProductsContainer>
      </S.Content>
    </S.Container>
  );
};
