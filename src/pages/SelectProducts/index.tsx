import React from 'react';

import { DraggableButton } from '../../components';

import { useTheme } from 'styled-components';

import * as S from './styles';

export const SelectProducts = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <DraggableButton color={theme.colors.products}>
        <S.BagIcon name="shopping-bag" />
      </DraggableButton>
    </S.Container>
  );
};
