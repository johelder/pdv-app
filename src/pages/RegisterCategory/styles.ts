import styled from 'styled-components/native';
import { Shadow } from 'react-native-shadow-2';

export const Container = styled.SafeAreaView`
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Content = styled.View`
  height: 100%;
  padding: 20px 15px 0;

  justify-content: space-between;
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