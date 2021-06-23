import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.primary};

  justify-content: center;
  align-items: center;

  padding: 16px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.text500};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.heading};
`;
