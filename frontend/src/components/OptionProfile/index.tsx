import React from 'react';

import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import { 
  Container,
  Title,
  Input,
} from './styles';

interface IProps extends TextInputProps {
  title: string;
}

export function OptionProfile({
  title,
  ...rest }: IProps) {

    const theme = useTheme();

  return (
    <Container>
      <Title>{title}</Title>

      <Input 
      placeholderTextColor={theme.colors.white}
      {...rest}
      
      />

    </Container>
  );
}