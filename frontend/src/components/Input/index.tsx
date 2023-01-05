import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

interface Props extends TextInputProps {
  iconName: React.ComponentProps<typeof Feather>['name'];
  value?: string;
}

import {
  Container,
  InputText,
  IconContainer,  
} from './styles';

export function Input({ 
  iconName,
  value,
  ...rest 
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)
  }
  
  const theme = useTheme();
  
  return (
    <Container >
      <IconContainer isFocused={isFocused}>
        <Feather
          name={iconName}
          size={24}
          color={(isFocused || isFilled) ? theme.colors.primary : theme.colors.text_datail}
        />

      </IconContainer>

      <InputText 
      onFocus={handleInputFocus}
      onBlur={handleInputBlur}
      isFocused={isFocused}
      placeholderTextColor={theme.colors.white}
      {...rest}
      />

    </Container>
);
}