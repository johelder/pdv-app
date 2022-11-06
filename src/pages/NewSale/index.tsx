import React, { useCallback, useState } from 'react';
import { Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';

import { Button, Checkbox, TextInput } from '../../components';
import { TNewSaleProps } from './types';

import PaymentIcon from '../../assets/images/dollar-funds.svg';
import emptyBagAnimationSource from '../../assets/animations/empty-bag-animation.json';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const NewSale = ({ navigation }: TNewSaleProps) => {
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const theme = useTheme();

  const handleSelectCheckbox = () => {
    setIsCheckboxSelected(prevCheckboxState => !prevCheckboxState);
  };

  const handleRedirectToSelectProducts = useCallback(() => {
    navigation.navigate('SelectProducts');
  }, [navigation]);

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

            <Button.Root type="filled" color={theme.colors.primary}>
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

            <S.ButtonFilterContainer>
              <Button.Root type="filled" color={theme.colors.primary}>
                <Button.Text color={theme.colors.light}>
                  Finalizar venda
                </Button.Text>
              </Button.Root>
            </S.ButtonFilterContainer>
          </S.Content>
        </TouchableWithoutFeedback>
      </S.Container>
    </>
  );
};
