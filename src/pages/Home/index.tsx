import React from 'react';

import { StatusBar, View } from 'react-native';
import { NavigationButton } from '../../components';

import Logo from '../../assets/images/logo.svg';

import * as S from './styles';
import { SaleButton } from '../../components/SaleButton';
import { Modal as SaleModal } from '../../components/Modal';

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

        <View style={{ paddingHorizontal: 15 }}>
          <SaleButton />
          <SaleButton />
          <SaleButton />
          <SaleButton />
        </View>

        <SaleModal isVisible={false} onCloseModal={() => {}}>
          <S.SaleModalContainer>
            <S.SaleModalContent>
              <S.ModalHeader>
                <S.ModalTitle>Essa foi a 2° venda do dia! 🎉</S.ModalTitle>
                <S.Icon name="x" />
              </S.ModalHeader>

              <S.ModalTopic>Produtos vendidos</S.ModalTopic>
              <S.ProductWrapper>
                <S.ModalSubTopic>1x Pizza Putaria</S.ModalSubTopic>
                <S.ModalSubTopic>R$ 14.99</S.ModalSubTopic>
              </S.ProductWrapper>

              <S.ProductWrapper>
                <S.ModalSubTopic>1x Pizza Putaria</S.ModalSubTopic>
                <S.ModalSubTopic>R$ 14.99</S.ModalSubTopic>
              </S.ProductWrapper>

              <S.ProductWrapper>
                <S.ModalSubTopic>1x Pizza Putaria</S.ModalSubTopic>
                <S.ModalSubTopic>R$ 14.99</S.ModalSubTopic>
              </S.ProductWrapper>

              <S.ProductWrapper>
                <S.ModalSubTopic>1x Pizza Putaria</S.ModalSubTopic>
                <S.ModalSubTopic>R$ 14.99</S.ModalSubTopic>
              </S.ProductWrapper>

              <S.ProductWrapper>
                <S.ModalSubTopic>1x Pizza Putaria</S.ModalSubTopic>
                <S.ModalSubTopic>R$ 14.99</S.ModalSubTopic>
              </S.ProductWrapper>

              <S.ProductWrapper>
                <S.ModalSubTopic>1x Pizza Putaria</S.ModalSubTopic>
                <S.ModalSubTopic>R$ 14.99</S.ModalSubTopic>
              </S.ProductWrapper>

              <S.ProductWrapper>
                <S.ModalSubTopic>1x Pizza Putaria</S.ModalSubTopic>
                <S.ModalSubTopic>R$ 14.99</S.ModalSubTopic>
              </S.ProductWrapper>

              <S.ProductWrapper>
                <S.ModalSubTopic>1x Pizza Putaria</S.ModalSubTopic>
                <S.ModalSubTopic>R$ 14.99</S.ModalSubTopic>
              </S.ProductWrapper>

              <S.ModalTopic>Valor do troco</S.ModalTopic>
              <S.ModalSubTopic>R$ 10.00</S.ModalSubTopic>

              <S.ModalTopic>Método de pagamento</S.ModalTopic>
              <S.ModalSubTopic>Cartão</S.ModalSubTopic>

              <S.ModalTopic>Horário da venda</S.ModalTopic>
              <S.ModalSubTopic>22:00</S.ModalSubTopic>

              <S.ModalFooter>
                <S.SaleTotalLabel>Total da venda: </S.SaleTotalLabel>
                <S.SaleTotal>R$ 29.00</S.SaleTotal>
              </S.ModalFooter>
            </S.SaleModalContent>
          </S.SaleModalContainer>
        </SaleModal>
      </S.Container>
    </>
  );
};
