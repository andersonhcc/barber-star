import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';
import { Container } from './styles';


export function Loading({ color, size }: ActivityIndicatorProps) {
  return (
    <Container>
      <ActivityIndicator color={color} size={size} />
    </Container>
  );
}