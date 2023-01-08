import React, { useState } from 'react';
import { Pressable } from 'react-native';
import { ButtonDefault } from '../ButtonDefault';
import { useTheme } from 'styled-components';

import {
  Container,
  Main,
  IconX,
  Title,
  Form,
  InputName,
  WrapperButton,
} from './styles';

interface Props {
  setVisible(): void;
}

export function ModalScheduling({ setVisible }: Props) {

  const theme = useTheme();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Container>

      <Main>
        <Pressable onPress={setVisible}>
          <IconX name="x" />
        </Pressable>

        <Title>Cadastro</Title>

        <Form>
          <InputName
            placeholder='Nome do cliente'
            placeholderTextColor={theme.colors.white}
            value={name}
            onChangeText={setName}
          />

          <InputName
            placeholder='Corte do cliente'
            placeholderTextColor={theme.colors.white}
            value={price}
            onChangeText={setPrice}
          />

          <WrapperButton>

            <ButtonDefault
              title="Enviar"
              backgroundColor={theme.colors.background_secondary}
              width={200}
              height={40}
              isLoading={isLoading}

            />

          </WrapperButton>

        </Form>

      </Main>

    </Container>
  );
}