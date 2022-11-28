import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
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

export const ErrorLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;
  text-align: center;

  color: ${({ theme }) => theme.colors.attention};
  padding: 0 20px;
`;

export const NewProductIcon = styled(Feather)`
  font-size: 24px;

  color: ${({ theme }) => theme.colors.products};
`;
