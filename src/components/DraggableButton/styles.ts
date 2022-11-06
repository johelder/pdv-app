import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  flex: 1;
  align-items: center;
  justify-content: center;

  margin: 0 5px;

  position: absolute;
  right: 0;
  top: 10%;

  z-index: 2;
  elevation: 2;
`;

export const CountContainer = styled.View`
  width: 20px;
  height: 20px;

  background-color: ${({ theme }) => theme.colors.attention};
  border-radius: 10px;

  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  right: 0;
`;

export const CountLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.primary.medium};
  font-size: 12px;

  color: ${({ theme }) => theme.colors.light};
`;
