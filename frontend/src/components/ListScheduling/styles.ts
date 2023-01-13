import styled from 'styled-components/native';

import { FontAwesome5 } from '@expo/vector-icons';


export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.5
})`
  width: 90%;
  margin-top: 15px;
  border-radius: 10px;
  flex-direction: row;
  padding: 10px 10px;
  
  background-color: ${({ theme }) => theme.colors.background_secondary};

`;

export const Image = styled(FontAwesome5).attrs({
  name: 'user-alt'
})`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Details = styled.View`
  flex: 1;
  padding-left: 5%;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Curt = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.white};

`;

export const WrapperPrice = styled.View`
  padding-left: 40%;
`;

export const Price = styled.Text`

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};

`;
