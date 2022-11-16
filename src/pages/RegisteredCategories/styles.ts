import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { ICategory } from '../SelectProducts/types';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 20px 15px 0;
`;

export const Categories = styled(
  FlatList as new (props: FlatListProps<ICategory>) => FlatList<ICategory>,
)``;

export const CategoryButtonIcon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};

  margin-left: 10px;
`;
