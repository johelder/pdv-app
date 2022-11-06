import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.light};

  border-radius: 5px;
`;

export const ImageContainer = styled.View`
  height: 30%;

  background-color: ${({ theme }) => theme.colors.products};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const DescriptionContainer = styled.View`
  height: 70%;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.light};

  margin-top: -5px;
  border-radius: 8px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.dark};

  margin: 10px 0 4px;
`;

export const Price = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray_400};

  text-align: center;

  margin: 20px 15px 12px;
`;

export const MultiButtonContainer = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 0 15px;
`;

export const ToggleProductButton = styled.TouchableOpacity``;

export const RemoveIcon = styled(Feather)`
  font-size: 34px;
  color: ${({ theme }) => theme.colors.attention};
`;

export const AddIcon = styled(Feather)`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ProductQuantityLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 22px;

  color: ${({ theme }) => theme.colors.dark};
`;
