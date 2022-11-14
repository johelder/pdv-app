import styled from 'styled-components/native';
import { Shadow } from 'react-native-shadow-2';
import Feather from 'react-native-vector-icons/Feather';
import { FlatList, FlatListProps } from 'react-native';
import { ICategory } from '../SelectProducts/types';

export const Container = styled.SafeAreaView``;

export const Content = styled.View`
  height: 100%;
  padding: 0 15px;

  flex-direction: column;
  justify-content: space-between;
`;

export const CategoriesContainer = styled(Shadow).attrs(({ theme }) => ({
  offset: [0, 4],
  distance: 8,
  startColor: theme.colors.shadow,
}))`
  width: 100%;
  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.light};
  margin-top: 20px;
`;

export const CategoriesContent = styled.View`
  padding: 15px;
`;

export const RegisterCategoryIcon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.categories};
`;

export const Categories = styled(
  FlatList as new (props: FlatListProps<ICategory>) => FlatList<ICategory>,
).attrs({
  showsVerticalScrollIndicator: false,
})``;

export const CategoryContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px 0;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray_100};
`;

export const CategoryName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.dark};
`;
