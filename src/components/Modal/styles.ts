import styled, { css } from 'styled-components/native';
import Modal from 'react-native-modal';
import { IModalProps } from './types';

export const Container = styled(Modal)<Pick<IModalProps, 'modalPosition'>>`
  ${({ modalPosition }) =>
    modalPosition === 'bottom' &&
    css`
      justify-content: flex-end;
      margin: 0;
    `}
`;
