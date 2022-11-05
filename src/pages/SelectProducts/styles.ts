import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const BagIcon = styled(Feather)`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.light};
`;
