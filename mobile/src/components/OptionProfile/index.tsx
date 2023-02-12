import React from 'react';

import { useTheme } from 'styled-components';
import { Props } from './types';

import {
  Container,
  Title,
  Input,
} from './styles';

export function OptionProfile({
  title,
  ...rest }: Props) {

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