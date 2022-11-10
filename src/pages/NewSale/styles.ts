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
