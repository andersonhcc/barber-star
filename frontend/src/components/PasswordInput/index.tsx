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
  ChangePasswordVisibilityButton,
} from './styles';

export function PasswordInput({
  iconName,
  value,
  ...rest
}: Props) {
  const theme = useTheme();
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  function handlePasswordVisibilityChange(){
    setIsPasswordVisible(prevState => !prevState)
  }

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!value)
  }
  

  return (
    <Container>
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
      secureTextEntry={isPasswordVisible}
      isFocused={isFocused}
      {...rest} 
      />

      <ChangePasswordVisibilityButton>
      <IconContainer isFocused={isFocused}>
        <Feather
          name={isPasswordVisible ? 'eye' : 'eye-off'}
          size={24}
          color={theme.colors.text_datail}
          onPress={handlePasswordVisibilityChange}
        />
      </IconContainer>

      </ChangePasswordVisibilityButton>

    </Container>
  );
}