import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, TextButtonAcess, Indicator } from './styles';

interface PropsButton extends TouchableOpacityProps{
  marginTop?: number;
  backgroundColor?: string;
  title: string;
  disabled?: boolean;
  isLoading?: boolean;
}

export function ButtonDefault({
  marginTop, 
  title, 
  backgroundColor, 
  isLoading,
  disabled,
  ...props} 
: PropsButton){
  return (
    <Container
      marginTop={marginTop}
      disabled={disabled}
      activeOpacity={0.5}
      backgroundColor={backgroundColor}
      {...props}
    >
      {
      isLoading ? 
        <Indicator /> 
        : 
        <TextButtonAcess>{title}</TextButtonAcess>
     }

      

    </Container>
  );
}