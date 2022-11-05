import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

import LottieView from 'lottie-react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
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
