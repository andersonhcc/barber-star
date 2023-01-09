import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window');

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.View`
  margin-top: ${HEIGHT - 500}px;
  width: ${WIDTH - 40}px;
  height: ${HEIGHT/4}px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const WrapperScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ButtonHairCut = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  padding: 10px 20px;
  border-bottom-width: 0.8px;
  border-bottom-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  align-self: flex-start;
  
  
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};

`;
