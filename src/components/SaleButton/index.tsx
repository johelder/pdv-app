import React, { useCallback, useState } from 'react';

import { Modal as SalesModal } from '../Modal';
import { formatHours, formatMoney } from '../../utils';

import { ISaleButtonProps } from './types';
import { IProductSold } from '../../pages/Home/types';

import * as S from './styles';

export const SaleButton = ({
  sale,
  dailyPosition,
  ...rest
}: ISaleButtonProps) => {
  const [toggleSaleModal, setToggleModalSale] = useState(false);

  const saleHour = formatHours(sale.createdAt);
  const saleTotal = formatMoney(sale.total / 100);
  const saleChange = formatMoney(sale.change);

  const handleToggleSaleModal = useCallback(() => {
    setToggleModalSale(prevModalState => !prevModalState);
  }, []);

  const renderProductSold = useCallback((product: IProductSold) => {
    const productSoldTotal = formatMoney(
      (product.unity_price * product.quantity) / 100,
    );

    return (
      <S.ProductWrapper key={product.id}>
        <S.ModalSubTopic>
          {product.quantity}x {product.name}
        </S.ModalSubTopic>
        <S.ModalSubTopic>{productSoldTotal}</S.ModalSubTopic>
      </S.ProductWrapper>
    );
  }, []);

  return (
    <>
      <S.Container>
        <S.Content onPress={handleToggleSaleModal} {...rest}>
          <S.SaleDetailsWrapper>
            <S.Icon name="shopping-cart" />
            <S.SaleDetails>
              <S.SaleHour>{saleHour} - </S.SaleHour>
              <S.SalePayment>{sale.payment_method.name}</S.SalePayment>
            </S.SaleDetails>
          </S.SaleDetailsWrapper>

          <S.SaleTotal>{saleTotal}</S.SaleTotal>
        </S.Content>
      </S.Container>

      <SalesModal
        isVisible={toggleSaleModal}
        onCloseModal={handleToggleSaleModal}
      >
        <S.SaleModalContainer>
          <S.SaleModalContent>
            <S.ModalHeader>
              <S.ModalTitle>
                Essa foi a {dailyPosition}° venda do dia! 🎉
              </S.ModalTitle>
              <S.CloseSaleModalButton onPress={handleToggleSaleModal}>
                <S.CloseIcon name="x" />
              </S.CloseSaleModalButton>
            </S.ModalHeader>

            <S.ModalTopic>Produtos vendidos</S.ModalTopic>
            {sale.products_sold.map((product: IProductSold) =>
              renderProductSold(product),
            )}

            <S.ModalTopic>Valor do troco</S.ModalTopic>
            <S.ModalSubTopic>{saleChange}</S.ModalSubTopic>

            <S.ModalTopic>Método de pagamento</S.ModalTopic>
            <S.ModalSubTopic>{sale.payment_method.name}</S.ModalSubTopic>

            <S.ModalTopic>Horário da venda</S.ModalTopic>
            <S.ModalSubTopic>{saleHour}</S.ModalSubTopic>

            <S.ModalFooter>
              <S.SaleTotalLabel>Total da venda: </S.SaleTotalLabel>
              <S.ModalSaleTotal>{saleTotal}</S.ModalSaleTotal>
            </S.ModalFooter>
          </S.SaleModalContent>
        </S.SaleModalContainer>
      </SalesModal>
    </>
  );
};
