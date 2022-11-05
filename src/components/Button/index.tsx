import React from 'react';
import { IButtonRootProps, IButtonIconProps, IButtonTextProps } from './types';

import * as S from './styles';

const ButtonRoot = ({ type, color, children, ...rest }: IButtonRootProps) => {
  return (
    <S.ButtonRootContainer type={type} color={color} {...rest}>
      {children}
    </S.ButtonRootContainer>
  );
};

const ButtonIcon = ({ children }: IButtonIconProps) => {
  return <S.ButtonIconContainer>{children}</S.ButtonIconContainer>;
};

const ButtonText = ({ color, children }: IButtonTextProps) => {
  return (
    <S.ButtonTextContainer color={color}>{children}</S.ButtonTextContainer>
  );
};

export const Button = {
  Root: ButtonRoot,
  Icon: ButtonIcon,
  Text: ButtonText,
};
