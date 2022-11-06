import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { ICategory } from './types';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const BagIcon = styled(Feather)`
  font-size: 28px;
  color: ${({ theme }) => theme.colors.light};
`;

export const SearchInputContainer = styled.View`
  margin: 20px 15px 0;
`;

export const SearchIcon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const CategoriesContainer = styled.View`
  margin: 20px 0;
`;

export const Categories = styled(
  FlatList as new (props: FlatListProps<ICategory>) => FlatList<ICategory>,
).attrs({
  showsHorizontalScrollIndicator: false,
  horizontal: true,
  contentContainerStyle: {
    paddingRight: 15,
  },
})`
  padding-left: 15px;
`;

export const CategoryContainer = styled.View`
  width: 250px;
  margin-right: 15px;
`;
