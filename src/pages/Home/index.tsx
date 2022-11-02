import React, { useCallback } from 'react';

import { StatusBar, ListRenderItemInfo } from 'react-native';
import { NavigationButton, SaleButton } from '../../components';
import { ISale } from './types';

import Logo from '../../assets/images/logo.svg';
import { sales } from './data';

import * as S from './styles';

export const Home = () => {
  const renderSale = useCallback(
    ({ item: sale }: ListRenderItemInfo<ISale>) => {
      return <SaleButton sale={sale} />;
    },
    [],
  );

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <S.Container>
        <S.Header>
          <S.LogoContainer>
            <Logo width={28} height={28} />
            <S.LogoLabel>vende.ai</S.LogoLabel>
          </S.LogoContainer>

          <S.DailyBillingContainer>
            <S.DailyBillingLabel>Faturamento diário</S.DailyBillingLabel>
            <S.DailyTotal>R$ 345,00</S.DailyTotal>
            <S.Date>22, agosto 2022</S.Date>
          </S.DailyBillingContainer>

          <S.NavigationButtonsContainer horizontal>
            <NavigationButton type="new-sale" />
            <NavigationButton type="register-product" />
            <NavigationButton type="register-category" />
            <NavigationButton type="registered" />
          </S.NavigationButtonsContainer>
        </S.Header>

        <S.DailySalesContainer>
          <S.DailySalesLabel>Vendas do dia</S.DailySalesLabel>
        </S.DailySalesContainer>

        <S.SalesContainer>
          <S.Sales
            data={sales}
            renderItem={renderSale}
            keyExtractor={sale => String(sale.id)}
          />
        </S.SalesContainer>
      </S.Container>
    </>
  );
};
