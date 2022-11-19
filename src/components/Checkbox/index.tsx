import React from 'react';

import { ICheckboxProps } from './types';

import * as S from './styles';

export const Checkbox = ({ type, isChecked, ...rest }: ICheckboxProps) => {
  return (
    <S.Container type={type} isChecked={isChecked} {...rest}>
      {isChecked && <S.CheckedIcon name="check" />}
    </S.Container>
  );
};
