import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.SafeAreaView`
  width: 100%;
  height: 40%;

  background-color: ${({ theme }) => theme.colors.secondary};

  align-items: center;
  justify-content: flex-start;

  position: relative;
`;

export const LogoContainer = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 10px;
`;

export const LogoLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.light};

  margin-left: 8px;
`;

export const DailyBillingContainer = styled.View`
  margin-top: 45px;

  align-items: center;
`;

export const DailyBillingLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.light};
`;

export const DailyTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 32px;
  color: ${({ theme }) => theme.colors.light};
`;

export const Date = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.light};
  align-self: flex-end;
`;

export const NavigationButtonsContainer = styled.ScrollView.attrs({
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingLeft: 15,
  },
})`
  position: absolute;
  bottom: -58px;
`;

export const DailySalesContainer = styled.View`
  margin-top: 80px;
  padding: 0 15px;
`;

export const DailySalesLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.semiBold};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.dark};

  margin-bottom: 22px;
`;

export const SaleModalContainer = styled.View`
  width: 100%;
  height: 60%;

  background-color: ${({ theme }) => theme.colors.light};

  border-radius: 5px;
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

export const Icon = styled(Feather)`
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

export const SaleTotal = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 18px;

  color: ${({ theme }) => theme.colors.secondary};
`;
