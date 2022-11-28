import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, ListRenderItemInfo } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

import { sale } from '../../services/sale';
import { NavigationButton, SaleButton } from '../../components';
import { formatMoney, formatToLongDate } from '../../utils';

import { THomeProps, ISale } from './types';
import { TPageStatus } from '../../types/general';

import Logo from '../../assets/images/logo.svg';

import * as S from './styles';

export const Home = ({ navigation }: THomeProps) => {
  const [pageStatus, setPageStatus] = useState<TPageStatus>('idle');
  const [sales, setSales] = useState<ISale[]>([]);

  const isScreenFocused = useIsFocused();

  const dailyBillingTotal = formatMoney(
    sales.reduce((salesTotal, sale) => (salesTotal += sale.total / 100), 0),
  );
  const dailyDate = formatToLongDate(new Date());

  const handleRedirectToNewSale = () => {
    navigation.navigate('NewSale');
  };

  const handleRedirectToRegisterProduct = () => {
    navigation.navigate('RegisterProduct', {
      redirect: 'RegisteredCategories',
    });
  };

  const handleRedirectToRegisterCategory = () => {
    navigation.navigate('RegisterCategory', {
      redirect: 'RegisteredCategories',
    });
  };

  const handleRedirectToRegisteredCategories = () => {
    navigation.navigate('RegisteredCategories');
  };

  const getSales = useCallback(async () => {
    setPageStatus('loading');

    const response = await sale.findAll();

    if (!response.ok) {
      setPageStatus('error');

      return;
    }

    setSales(response.data);
    setPageStatus('success');
  }, []);

  useEffect(() => {
    if (isScreenFocused) {
      getSales();
    }
  }, [getSales, isScreenFocused]);

  const renderSale = useCallback(
    ({ item: sale, index }: ListRenderItemInfo<ISale>) => {
      return <SaleButton sale={sale} dailyPosition={sales.length - index} />;
    },
    [sales.length],
  );

  const renderEmptySales = useCallback(() => {
    return (
      <S.EmptySalesLabel>
        Você ainda não realizou vendas hoje :(
      </S.EmptySalesLabel>
    );
  }, []);

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
        </S.Header>

        <S.NavigationButtonsContainer horizontal>
          <NavigationButton type="new-sale" onPress={handleRedirectToNewSale} />
          <NavigationButton
            type="register-product"
            onPress={handleRedirectToRegisterProduct}
          />
          <NavigationButton
            type="register-category"
            onPress={handleRedirectToRegisterCategory}
          />
          <NavigationButton
            type="registered"
            onPress={handleRedirectToRegisteredCategories}
          />
        </S.NavigationButtonsContainer>

        <S.DailySalesContainer>
          <S.DailySalesLabel>Vendas do dia</S.DailySalesLabel>
        </S.DailySalesContainer>

        <S.SalesContainer>
          <S.Sales
            data={sales}
            renderItem={renderSale}
            keyExtractor={sale => String(sale.id)}
            onRefresh={getSales}
            refreshing={pageStatus === 'loading'}
            ListEmptyComponent={renderEmptySales}
          />
        </S.SalesContainer>
      </S.Container>
    </>
  );
};
