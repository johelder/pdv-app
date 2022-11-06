import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import { ICategory } from './types';
import { IProduct } from '../../components/Product/types';

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
  margin-top: 20px;
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

export const ProductsContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const Products = styled(
  FlatList as new (props: FlatListProps<IProduct>) => FlatList<IProduct>,
).attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 15,
  },
  columnWrapperStyle: { justifyContent: 'space-between' },
})``;

export const ProductContainer = styled.View`
  width: 48%;
  height: 260px;

  margin-bottom: 10px;
`;

export const ModalContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 5px;

  min-height: 300px;
  max-height: 450px;
`;

export const ModalContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 15,
  },
})``;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CloseModalButton = styled.TouchableOpacity``;

export const CloseIcon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.dark};

  margin-bottom: 20px;
`;

export const AddedProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 10px;
`;

export const AddedProduct = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.dark};
`;

export const AddedProductPrice = styled(AddedProduct)``;
