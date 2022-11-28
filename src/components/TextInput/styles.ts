import styled from 'styled-components/native';
import { Shadow } from 'react-native-shadow-2';
import { ITextInputRootProps } from './types';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

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

  padding: 0 15px;

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

export const TextInputErrorContainer = styled.View`
  position: relative;
`;

export const TextInputErrorMessageContainer = styled.View`
  width: auto;
  height: 20px;

  background-color: ${({ theme }) => theme.colors.attention};
  border-radius: 5px;

  padding: 4px;

  align-items: center;
  justify-content: center;

  position: absolute;
  top: -30px;
  right: 0;
  left: auto;
`;

export const TextInputErrorMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  font-size: 10px;

  color: ${({ theme }) => theme.colors.light};
`;

export const WarningIcon = styled(EvilIcons)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.attention};
`;
