import React from 'react';

import { ICheckboxProps } from './types';

import * as S from './styles';

export const Checkbox = ({ isChecked, ...rest }: ICheckboxProps) => {
  return (
    <S.Container isChecked={isChecked} {...rest}>
      {isChecked && <S.CheckedIcon name="check" />}
    </S.Container>
  );
};
