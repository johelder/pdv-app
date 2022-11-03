import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 15px;
`;

export const AddProductIcon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.light};
`;

export const ChangeContainer = styled.View``;

export const NeedChangeContainer = styled.View``;

export const ChangeLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.dark};
`;
