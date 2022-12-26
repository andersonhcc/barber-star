import styled, { css } from 'styled-components/native';


import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  marginTop?: number;
  backgroundColor?: string;
}

export const Container = styled.TouchableOpacity<Props>`
  ${({marginTop}) => marginTop ? css`margin-top: ${marginTop}px;` : ''};
  
  ${({backgroundColor, theme}) => backgroundColor ? css`background-color: ${backgroundColor};` : css`${theme.colors.primary};`}
  
  width: ${RFValue(300)}px;
  height: ${RFValue(50)}px;
  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  border-radius: 7px;
  align-items: center;
  justify-content: center;

`;

export const TextButtonAcess = styled.Text`
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({theme}) => theme.fonts.regular};

`;

export const Indicator = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#ffff'
})`
`;