import { FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import { IProduct } from '../../components/Product/types';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px 15px 0;
`;

export const ProductsContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Products = styled(
  FlatList as new (props: FlatListProps<IProduct>) => FlatList<IProduct>,
).attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {},
  columnWrapperStyle: { justifyContent: 'space-between' },
})``;

export const ProductContainer = styled.View`
  width: 48%;
  height: 260px;

  margin-bottom: 10px;
`;
