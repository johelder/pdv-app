import React from 'react';
import { StatusBar } from 'react-native';

import { Button } from '../../components';
import PaymentIcon from '../../assets/images/dollar-funds.svg';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const NewSale = () => {
  const theme = useTheme();

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <S.Container>
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
              <PaymentIcon width={26} height={26} />
            </Button.Icon>

            <Button.Text color={theme.colors.light}>Pagamento</Button.Text>
          </Button.Root>

          <S.ChangeContainer>
            <S.NeedChangeContainer>
              <S.ChangeLabel>Precisa de troco?</S.ChangeLabel>
            </S.NeedChangeContainer>
          </S.ChangeContainer>
        </S.Content>
      </S.Container>
    </>
  );
};
