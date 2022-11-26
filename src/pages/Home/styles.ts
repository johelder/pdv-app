import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { ISale } from './types';

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

  margin-top: 40px;
`;

export const LogoLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.light};

  margin-left: 8px;
`;

export const DailyBillingContainer = styled.View`
  margin-top: 35px;

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
  top: 33%;
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

export const SalesContainer = styled.View`
  padding: 0 15px;
  flex: 1;
`;

export const Sales = styled(
  FlatList as new (props: FlatListProps<ISale>) => FlatList<ISale>,
).attrs({
  showsVerticalScrollIndicator: false,
})``;
