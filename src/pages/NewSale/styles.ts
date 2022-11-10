import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

import LottieView from 'lottie-react-native';
import { IProductBag } from '../../features/bag/types';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  padding: 15px;
  flex: 1;
`;

export const AddProductIcon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.light};
`;

export const ChangeContainer = styled.View``;

export const NeedChangeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 15px;
`;

export const ChangeLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.dark};
`;

export const ChangeIcon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const EmptyBagContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const EmptyBagAnimation = styled(LottieView)``;

export const EmptyBagLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};

  margin-bottom: 40px;
`;

export const ButtonFilterContainer = styled.View`
  margin-bottom: 15px;
`;

export const ModalContent = styled.View`
  width: 100%;
  height: 40%;

  background-color: ${({ theme }) => theme.colors.background};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  padding: 0 15px;
`;

export const DraggableTopBar = styled.View`
  width: 60px;
  height: 6px;

  background-color: ${({ theme }) => theme.colors.gray_400};
  border-radius: 10px;

  margin: 10px 0 28px;
  align-self: center;
`;

export const PaymentMethodIconContainer = styled.View`
  width: 35px;
  height: 35px;

  border-radius: 17.5px;
  background-color: ${({ theme }) => theme.colors.gray_100};

  align-items: center;
  justify-content: center;

  margin-right: 10px;
`;

export const PaymentMethodIcon = styled(Feather)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ChoicePaymentMethodButton = styled.TouchableOpacity``;

export const ChoicePaymentMethodLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.primary};

  align-self: center;
  margin: 15px;
`;

export const AddedProducts = styled(
  FlatList as new (props: FlatListProps<IProductBag>) => FlatList<IProductBag>,
)``;

export const AddedProductContainer = styled.View`
  margin-bottom: 15px;
`;

export const AddedProductLabelsContainer = styled.View`
  flex-direction: row;

  align-items: center;
  justify-content: space-between;
`;

export const AddedProductLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.dark};
`;

export const RemoveProductButton = styled.TouchableOpacity`
  margin-top: 10px;
`;

export const RemoveProductLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 14px;

  color: ${({ theme }) => theme.colors.attention};
`;

export const AddedProductsListHeaderContainer = styled.View`
  margin: 20px 0;
`;

export const AddedProductListTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.dark};
`;

export const AddedProductsListFooterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  margin-top: 20px;
`;

export const ProductsTotalLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.dark};
`;

export const ProductsTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.success};
`;
