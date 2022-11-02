import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { IButtonNavigationColors } from '../../types';

export const Container = styled.TouchableOpacity<IButtonNavigationColors>`
  width: 225px;
  height: 116px;

  margin-right: 15px;

  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.light};
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 20px;

  margin-top: 8px;

  color: ${({ theme }) => theme.colors.light};
`;
