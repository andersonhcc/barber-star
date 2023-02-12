import React from 'react';

import { Container, TextButtonAcess, Indicator } from './styles';
import { PropsButton } from './types';

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