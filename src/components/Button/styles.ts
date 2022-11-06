import styled, { css } from 'styled-components/native';
import { IButtonRootProps, IButtonTextProps } from './types';

export const ButtonRootContainer = styled.TouchableOpacity<IButtonRootProps>`
  width: 100%;

  padding: 14px;
  margin-bottom: 15px;
  border-radius: 5px;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${({ type, color }) =>
    type === 'filled' &&
    css`
      background: ${color};
      border: 1px solid ${color};
    `}

  ${({ type, color }) =>
    type === 'outline' &&
    css`
      border: 1px solid ${color};
      background-color: ${({ theme }) => theme.colors.light};
    `}
`;

export const ButtonIconContainer = styled.View`
  margin-right: 10px;
`;

export const ButtonTextContainer = styled.Text<IButtonTextProps>`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;

  color: ${({ color }) => color};
`;
