import styled from 'styled-components/native';
import { Shadow } from 'react-native-shadow-2';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled(Shadow).attrs(({ theme }) => ({
  offset: [0, 4],
  distance: 8,
  startColor: theme.colors.shadow,
}))`
  width: 100%;

  margin-bottom: 15px;
`;

export const Content = styled.TouchableOpacity`
  width: 100%;

  padding: 22px 15px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 5px;
`;

export const SaleDetailsWrapper = styled.View`
  flex-direction: row;
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const SaleDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SalePayment = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.gray_400};
`;

export const SaleHour = styled(SalePayment)`
  margin-left: 15px;
`;

export const SaleTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.primary};
`;

export const SaleModalContainer = styled.View`
  width: 100%;
  height: 65%;

  background-color: ${({ theme }) => theme.colors.light};

  border-radius: 5px;

  justify-content: center;
`;

export const SaleModalContent = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    padding: 15,
  },
})``;

export const ModalHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const ModalTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 20px;

  color: ${({ theme }) => theme.colors.dark};
`;

export const CloseSaleModalButton = styled.TouchableOpacity``;

export const CloseIcon = styled(Feather)`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ModalTopic = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.secondary};

  margin: 5px 0 10px;
`;

export const ProductWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ModalSubTopic = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.dark};
  margin-bottom: 10px;
`;

export const ModalFooter = styled.View`
  margin-top: 30px;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
`;

export const SaleTotalLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.dark};
`;

export const ModalSaleTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.secondary};
`;
