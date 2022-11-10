import React, { useMemo } from 'react';

import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/appSelector';
import { addProduct, removeProduct } from '../../features/bag/bag-slice';

import { IProduct, IProductProps } from './types';
import { formatMoney } from '../../utils';

import * as S from './styles';

export const Product = ({ product }: IProductProps) => {
  const dispatch = useDispatch();
  const products = useAppSelector(state => state.bag.products);

  const currentProduct = useMemo(
    () => products.find(storedProduct => storedProduct.id === product.id),
    [product.id, products],
  );

  const formattedProductPrice = formatMoney(product.price / 100);

  const handleAddProduct = (product: IProduct) => {
    dispatch(addProduct(product));
  };

  const handleRemoveProduct = (productId: number) => {
    if (!currentProduct?.quantity) {
      return;
    }

    dispatch(removeProduct(productId));
  };

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
          <S.RemoveProductButton
            onPress={() => handleRemoveProduct(product.id)}
          >
            <S.RemoveIcon name="minus-circle" />
          </S.RemoveProductButton>

          <S.ProductQuantityLabel>
            {currentProduct?.quantity ?? 0}
          </S.ProductQuantityLabel>

          <S.AddProductButton onPress={() => handleAddProduct(product)}>
            <S.AddIcon name="plus-circle" />
          </S.AddProductButton>
        </S.MultiButtonContainer>
      </S.DescriptionContainer>
    </S.Container>
  );
};
