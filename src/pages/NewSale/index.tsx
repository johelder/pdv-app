import React, { useCallback, useMemo, useState } from 'react';
import {
  Keyboard,
  ListRenderItemInfo,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';

import { useAppSelector } from '../../hooks/appSelector';
import { useDispatch } from 'react-redux';
import { removeProductWithAllQuantity } from '../../features/bag/bag-slice';

import { Button, Checkbox, Modal, TextInput } from '../../components';
import { formatMoney } from '../../utils';

import { TNewSaleProps } from './types';
import { IProductBag } from '../../features/bag/types';

import PaymentIcon from '../../assets/images/dollar-funds.svg';
import PixIcon from '../../assets/images/pix.svg';
import emptyBagAnimationSource from '../../assets/animations/empty-bag-animation.json';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const NewSale = ({ navigation }: TNewSaleProps) => {
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const [togglePaymentMethodsModal, setTogglePaymentMethodsModal] =
    useState(false);

  const products = useAppSelector(state => state.bag.products);
  const dispatch = useDispatch();

  const productsTotal = useMemo(() => {
    return products.reduce(
      (accumulatorTotal, product) =>
        (accumulatorTotal += product.price * product.quantity),
      0,
    );
  }, [products]);

  const theme = useTheme();

  const handleSelectCheckbox = () => {
    setIsCheckboxSelected(prevCheckboxState => !prevCheckboxState);
  };

  const handleTogglePaymentMethodsModal = useCallback(() => {
    setTogglePaymentMethodsModal(prevModalState => !prevModalState);
  }, []);

  const handleRedirectToSelectProducts = useCallback(() => {
    navigation.navigate('SelectProducts');
  }, [navigation]);

  const handleRemoveProduct = useCallback(
    (productId: number) => {
      dispatch(removeProductWithAllQuantity(productId));
    },
    [dispatch],
  );

  const renderAddedProduct = useCallback(
    ({ item: addedProduct }: ListRenderItemInfo<IProductBag>) => {
      const formattedPrice = formatMoney(addedProduct.price / 100);

      return (
        <S.AddedProductContainer>
          <S.AddedProductLabelsContainer>
            <S.AddedProductLabel>
              {addedProduct.quantity}x {addedProduct.name}
            </S.AddedProductLabel>
            <S.AddedProductLabel>{formattedPrice}</S.AddedProductLabel>
          </S.AddedProductLabelsContainer>

          <S.RemoveProductButton
            onPress={() => handleRemoveProduct(addedProduct.id)}
          >
            <S.RemoveProductLabel>Remover</S.RemoveProductLabel>
          </S.RemoveProductButton>
        </S.AddedProductContainer>
      );
    },
    [handleRemoveProduct],
  );

  const renderAddedProductsListHeader = useCallback(() => {
    return (
      <S.AddedProductsListHeaderContainer>
        <S.AddedProductListTitle>Produtos selecionados</S.AddedProductListTitle>
      </S.AddedProductsListHeaderContainer>
    );
  }, []);

  const renderAddedProductsListFooter = useCallback(() => {
    const formattedTotal = formatMoney(productsTotal / 100);

    return (
      <S.AddedProductsListFooterContainer>
        <S.ProductsTotalLabel>Valor total </S.ProductsTotalLabel>
        <S.ProductsTotal>{formattedTotal}</S.ProductsTotal>
      </S.AddedProductsListFooterContainer>
    );
  }, [productsTotal]);

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <S.Container>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <S.Content>
            <Button.Root
              type="filled"
              color={theme.colors.primary}
              onPress={handleRedirectToSelectProducts}
            >
              <Button.Icon>
                <S.AddProductIcon name="shopping-bag" />
              </Button.Icon>

              <Button.Text color={theme.colors.light}>
                Adicionar produtos
              </Button.Text>
            </Button.Root>

            <Button.Root
              type="filled"
              color={theme.colors.primary}
              onPress={handleTogglePaymentMethodsModal}
            >
              <Button.Icon>
                <PaymentIcon width={24} height={24} />
              </Button.Icon>

              <Button.Text color={theme.colors.light}>Pagamento</Button.Text>
            </Button.Root>

            <S.ChangeContainer>
              <S.NeedChangeContainer>
                <S.ChangeLabel>Essa venda não precisa de troco</S.ChangeLabel>
                <Checkbox
                  isChecked={isCheckboxSelected}
                  onPress={handleSelectCheckbox}
                />
              </S.NeedChangeContainer>

              <TextInput.Root isDisabled={isCheckboxSelected}>
                <TextInput.Icon>
                  <S.ChangeIcon name="dollar-sign" />
                </TextInput.Icon>
                <TextInput.Input
                  placeholder={!isCheckboxSelected ? 'Valor do troco' : '0,00'}
                  keyboardType="numeric"
                  editable={!isCheckboxSelected}
                  placeholderTextColor={theme.colors.gray_400}
                />
              </TextInput.Root>
            </S.ChangeContainer>

            {!products.length ? (
              <S.EmptyBagContainer>
                <S.EmptyBagAnimation
                  source={emptyBagAnimationSource}
                  style={{ width: 300 }}
                  autoPlay
                  loop
                />

                <S.EmptyBagLabel>
                  Você ainda não adicionou nenhum{'\n'}produto a essa venda
                </S.EmptyBagLabel>
              </S.EmptyBagContainer>
            ) : (
              <S.AddedProducts
                data={products}
                keyExtractor={product => String(product.id)}
                renderItem={renderAddedProduct}
                ListHeaderComponent={renderAddedProductsListHeader}
                ListFooterComponent={renderAddedProductsListFooter}
              />
            )}

            <S.ButtonFilterContainer>
              <Button.Root type="filled" color={theme.colors.primary}>
                <Button.Text color={theme.colors.light}>
                  Finalizar venda
                </Button.Text>
              </Button.Root>
            </S.ButtonFilterContainer>

            <Modal
              isVisible={togglePaymentMethodsModal}
              onCloseModal={handleTogglePaymentMethodsModal}
              swipeDirection="down"
              modalPosition="bottom"
            >
              <S.ModalContent>
                <S.DraggableTopBar />

                <Button.Root
                  type="unfilled"
                  color={theme.colors.primary}
                  align="start"
                >
                  <S.PaymentMethodIconContainer>
                    <Button.Icon>
                      <S.PaymentMethodIcon name="dollar-sign" />
                    </Button.Icon>
                  </S.PaymentMethodIconContainer>

                  <Button.Text color={theme.colors.dark}>Dinheiro</Button.Text>
                </Button.Root>

                <Button.Root
                  type="outline"
                  color={theme.colors.primary}
                  align="start"
                >
                  <S.PaymentMethodIconContainer>
                    <Button.Icon>
                      <S.PaymentMethodIcon name="credit-card" />
                    </Button.Icon>
                  </S.PaymentMethodIconContainer>

                  <Button.Text color={theme.colors.dark}>Cartão</Button.Text>
                </Button.Root>

                <Button.Root
                  type="unfilled"
                  color={theme.colors.primary}
                  align="start"
                >
                  <S.PaymentMethodIconContainer>
                    <Button.Icon>
                      <PixIcon />
                    </Button.Icon>
                  </S.PaymentMethodIconContainer>

                  <Button.Text color={theme.colors.dark}>Pix</Button.Text>
                </Button.Root>

                <S.ChoicePaymentMethodButton>
                  <S.ChoicePaymentMethodLabel>
                    Escolher
                  </S.ChoicePaymentMethodLabel>
                </S.ChoicePaymentMethodButton>
              </S.ModalContent>
            </Modal>
          </S.Content>
        </TouchableWithoutFeedback>
      </S.Container>
    </>
  );
};
