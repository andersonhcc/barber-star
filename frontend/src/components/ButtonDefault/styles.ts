import styled, { css } from 'styled-components/native';


import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  marginTop?: number;
  backgroundColor?: string;
  width?: number;
  height?: number;
  fontSize?: number;
}

interface TextProps {
  fontSize?: number;
}

export const Container = styled.TouchableOpacity<Props>`
  ${({ marginTop }) => marginTop ? css`margin-top: ${marginTop}px;` : ''};
  
  ${({ backgroundColor, theme }) => backgroundColor ? css`background-color: ${backgroundColor};` : css`${theme.colors.primary};`}

  ${({ width }) => width ? css`width: ${RFValue(width)}px;` : css`width: ${RFValue(300)}px;`}

  ${({ height }) => height ? css`height: ${height}px;` : css`height: 50px;`}

  opacity: ${({ disabled }) => disabled ? 0.5 : 1};
  border-radius: 7px;
  align-items: center;
  justify-content: center;

`;

export const TextButtonAcess = styled.Text<TextProps>`
  
  ${({ fontSize }) => fontSize ? css`font-size: ${RFValue(fontSize)}px` : css`font-size: ${RFValue(17)}px`}

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};

`;

export const Indicator = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#ffff'
})`
`;