import React, { useCallback } from 'react';
import { ListRenderItemInfo } from 'react-native';
import { Product } from '../../components';
import { IProduct } from '../../components/Product/types';
import { category } from './data';

import * as S from './styles';

export const RegisteredProducts = () => {
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

  return (
    <S.Container>
      <S.Content>
        <S.ProductsContainer>
          <S.Products
            data={category.products}
            renderItem={renderProduct}
            keyExtractor={product => String(product.id)}
            numColumns={2}
            key={2}
          />
        </S.ProductsContainer>
      </S.Content>
    </S.Container>
  );
};
