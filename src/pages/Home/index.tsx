import React, { useCallback } from 'react';
import { StatusBar, ListRenderItemInfo } from 'react-native';

import { NavigationButton, SaleButton } from '../../components';
import { formatMoney, formatToLongDate } from '../../utils';
import { HomeProps, ISale } from './types';

import Logo from '../../assets/images/logo.svg';
import { sales } from './data';

import * as S from './styles';

export const Home = ({ navigation }: HomeProps) => {
  const dailyBillingTotal = formatMoney(
    sales.reduce((salesTotal, sale) => (salesTotal += sale.total / 100), 0),
  );
  const dailyDate = formatToLongDate(new Date());

  const renderSale = useCallback(
    ({ item: sale }: ListRenderItemInfo<ISale>) => {
      return <SaleButton sale={sale} />;
    },
    [],
  );

  const handleRedirectToNewSale = () => {
    navigation.navigate('NewSale');
  };

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
            <S.DailyTotal>{dailyBillingTotal}</S.DailyTotal>
            <S.Date>{dailyDate}</S.Date>
          </S.DailyBillingContainer>

          <S.NavigationButtonsContainer horizontal>
            <NavigationButton
              type="new-sale"
              onPress={handleRedirectToNewSale}
            />
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
