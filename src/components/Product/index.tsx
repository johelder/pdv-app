import React from 'react';

import { IProductProps } from './types';
import { formatMoney } from '../../utils';

import * as S from './styles';

export const Product = ({ product }: IProductProps) => {
  const formattedProductPrice = formatMoney(product.price / 100);

  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image source={{ uri: product.image }} resizeMode="center" />
      </S.ImageContainer>

      <S.DescriptionContainer>
        <S.Name>{product.name}</S.Name>
        <S.Price>{formattedProductPrice}</S.Price>
        <S.Description>{product.description}</S.Description>

        <S.MultiButtonContainer>
          <S.ToggleProductButton>
            <S.RemoveIcon name="minus-circle" />
          </S.ToggleProductButton>

          <S.ProductQuantityLabel>14</S.ProductQuantityLabel>

          <S.ToggleProductButton>
            <S.AddIcon name="plus-circle" />
          </S.ToggleProductButton>
        </S.MultiButtonContainer>
      </S.DescriptionContainer>
    </S.Container>
  );
};
