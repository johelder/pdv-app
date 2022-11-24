import styled from 'styled-components/native';
import { Shadow } from 'react-native-shadow-2';
import Feather from 'react-native-vector-icons/Feather';

import LottieView from 'lottie-react-native';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    height: '100%',
    justifyContent: 'space-between',
  },
})`
  padding: 20px 15px 0;
`;

export const FormContent = styled.View``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.dark};
`;

export const InputContainer = styled.View``;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.dark};

  margin: 20px 0 10px;
`;

export const CategoryDescriptionInputContainer = styled(Shadow).attrs(
  ({ theme }) => ({
    offset: [0, 4],
    distance: 8,
    startColor: theme.colors.shadow,
  }),
)`
  width: 100%;
  border-radius: 5px;

  margin-bottom: 25px;
`;

export const CategoryDescriptionInput = styled.TextInput`
  width: 100%;
  height: 100px;

  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 5px;

  padding: 15px;
`;

export const FooterContainer = styled.View``;

export const ErrorLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 14px;

  text-align: center;
  margin-bottom: 10px;

  color: ${({ theme }) => theme.colors.attention};
`;

export const ModalContent = styled.View`
  width: 100%;
  height: auto;

  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  align-items: center;
  padding: 30px;
`;

export const ErrorAnimation = styled(LottieView)``;


export const ModalTextContainer = styled.View``;


export const ModalTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 22px;
  margin: 20px 0 5px;
`;

export const ModalMessage = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 16px;
`;

export const CloseModalButton = styled.TouchableOpacity`
  position: absolute;
  right: 15;
  top: 15;
`;

export const CloseIcon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;
