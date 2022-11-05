import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { ICheckboxProps } from './types';

export const Container = styled.TouchableOpacity<ICheckboxProps>`
  width: 30px;
  height: 30px;

  background-color: ${({ theme, isChecked }) =>
    isChecked ? theme.colors.primary : theme.colors.light};
  border: ${StyleSheet.hairlineWidth}px solid
    ${({ theme }) => theme.colors.primary};
  border-radius: 15px;

  align-items: center;
  justify-content: center;
`;

export const CheckedIcon = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.light};
`;
