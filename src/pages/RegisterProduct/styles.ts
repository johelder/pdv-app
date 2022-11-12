import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Shadow } from 'react-native-shadow-2';

export const Container = styled.SafeAreaView``;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: 15px;
`;

export const ImageIcon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.light};
`;

export const InputContainer = styled.View``;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.dark};

  margin: 20px 0 10px;
`;

export const ProductDescriptionInputContainer = styled(Shadow).attrs(
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

export const ProductDescriptionInput = styled.TextInput`
  width: 100%;
  height: 85px;

  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.dark};
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 5px;

  padding: 15px;
`;

export const CategoryIcon = styled(MaterialIcons)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.categories};
`;

export const RegisterProductButtonContainer = styled.View`
  margin-top: 40px;
`;
