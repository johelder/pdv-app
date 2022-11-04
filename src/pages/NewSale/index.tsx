import React, { useState } from 'react';
import { Keyboard, StatusBar, TouchableWithoutFeedback } from 'react-native';

import { Button, Checkbox, TextInput } from '../../components';
import PaymentIcon from '../../assets/images/dollar-funds.svg';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const NewSale = () => {
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);
  const theme = useTheme();

  const handleSelectCheckbox = () => {
    setIsCheckboxSelected(prevCheckboxState => !prevCheckboxState);
  };

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
            <Button.Root type="filled" color={theme.colors.primary}>
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
                />
              </TextInput.Root>
            </S.ChangeContainer>
          </S.Content>
        </TouchableWithoutFeedback>
      </S.Container>
    </>
  );
};
