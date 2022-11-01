import React from 'react';

import * as S from './styles';

export const SaleButton = () => {
  return (
    <S.Container>
      <S.Content>
        <S.SaleDetailsWrapper>
          <S.Icon name="shopping-cart" />
          <S.SaleDetails>
            <S.SaleHour>09:30 - </S.SaleHour>
            <S.SalePayment>Pix</S.SalePayment>
          </S.SaleDetails>
        </S.SaleDetailsWrapper>

        <S.SaleTotal>R$ 1.000</S.SaleTotal>
      </S.Content>
    </S.Container>
  );
};
