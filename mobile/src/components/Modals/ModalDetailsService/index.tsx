import React from 'react';
import { Pressable, Alert } from 'react-native';

import { useTheme } from 'styled-components';

import { Props } from './types';
import { ButtonDefault } from '@components/ButtonDefault';

import {
  Container,
  Main,
  IconX,
  Title,
  Details,
  Name,
  HairCut,
  Price,
  WrapperButton,
} from './styles';

export function ModalDetailsService({ closeModal, data, handleFinishService }: Props) {
  const theme = useTheme();
  return (
    <Container>

      <Main>
        <Pressable onPress={closeModal}>
          <IconX name="x" />
        </Pressable>

        <Title>Próximo</Title>

        <Details>

          <Name>Nome: {data.customer}</Name>
          <HairCut>Corte: {data.haircut.name}</HairCut>
          <Price>Preço: {data.haircut.price}</Price>

        </Details>

        <WrapperButton>

          <ButtonDefault
            title="Finalizar"
            backgroundColor={theme.colors.primary}
            onPress={handleFinishService}
            width={150}
            height={40}
            fontSize={14}
          />

        </WrapperButton>

      </Main>


    </Container>
  );
}