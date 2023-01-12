import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, TextButtonAcess, Indicator } from './styles';

interface PropsButton extends TouchableOpacityProps{
  marginTop?: number;
  backgroundColor?: string;
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
  width?: number;
  height?: number;
  fontSize?: number;
  fontColor?: string;
}

export function ButtonDefault({
  marginTop, 
  title, 
  backgroundColor, 
  isLoading,
  disabled,
  width,
  height,
  fontColor,
  fontSize,
  ...props} 
: PropsButton){
  return (
    <Container
      marginTop={marginTop}
      disabled={disabled}
      activeOpacity={0.5}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      {...props}
    >
      {
      isLoading ? 
        <Indicator /> 
        : 
        <TextButtonAcess 
        fontSize={fontSize}
        fontColor={fontColor}
        >
        {title}
        </TextButtonAcess>
     }

      

    </Container>
  );
}