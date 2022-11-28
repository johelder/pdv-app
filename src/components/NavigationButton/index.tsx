import React from 'react';

import { IButtonNavigationProps } from './types';
import { buttonSwitcher } from './buttonSwitcher';

import * as S from './styles';

export const NavigationButton = ({ type, ...rest }: IButtonNavigationProps) => {
  const { title, iconName, color } = buttonSwitcher[type];

  return (
    <S.Container color={color} {...rest}>
      <S.Icon name={iconName} />
      <S.Label>{title}</S.Label>
    </S.Container>
  );
};
