import React from 'react';

import { StatusBar } from 'react-native';
import { NavigationButton } from '../../components';

import Logo from '../../assets/images/logo.svg';

import * as S from './styles';

export const Home = () => {
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
      </S.Container>
    </>
  );
};
