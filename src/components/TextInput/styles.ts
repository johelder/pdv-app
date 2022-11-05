import styled from 'styled-components/native';
import { Shadow } from 'react-native-shadow-2';
import { ITextInputRootProps } from './types';

export const TextInputRootContainer = styled(Shadow).attrs(({ theme }) => ({
  offset: [0, 4],
  distance: 8,
  startColor: theme.colors.shadow,
}))`
  width: 100%;
  height: 50px;
  border-radius: 25px;
`;

export const TextInputRootContent = styled.View<ITextInputRootProps>`
  flex: 1;

  background-color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.colors.gray_100 : theme.colors.light};
  border-radius: 25px;

  padding: 12px 10px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextInputIconContainer = styled.View`
  width: 40px;
  align-items: center;
  justify-content: center;
`;

export const TextInputContainer = styled.TextInput`
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.dark};
`;
