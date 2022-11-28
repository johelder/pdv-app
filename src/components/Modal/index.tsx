import React from 'react';
import { IModalProps } from './types';

import * as S from './styles';

export const Modal = ({
  isVisible,
  onCloseModal,
  swipeDirection,
  children,
  modalPosition,
}: IModalProps) => {
  return (
    <S.Container
      isVisible={isVisible}
      onBackButtonPress={onCloseModal}
      onBackdropPress={onCloseModal}
      swipeDirection={swipeDirection}
      modalPosition={modalPosition}
    >
      {children}
    </S.Container>
  );
};
