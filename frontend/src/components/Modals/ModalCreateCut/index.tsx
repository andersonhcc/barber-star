import React, { useState } from 'react';
import { Pressable, Alert, Switch } from 'react-native';
import { ButtonDefault } from '../../ButtonDefault';
import { useTheme } from 'styled-components';


import { api } from '../../../services/api';

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
  closeModal(): void;
  setAtt(): void;
}

export function ModalCreateCut({ closeModal, setAtt }: Props) {

  const theme = useTheme();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  async function handleCadasterCut() {
    const priceFormatted = Number(price);


    try {

      const response = await api.post("/haircut", {
        name,
        price: priceFormatted
      });

      closeModal()
      Alert.alert("Cadastrado com sucesso");
      setAtt();

    } catch (error) {

      Alert.alert("Algo deu errado");
      console.log(error);

    }

  }

  return (
    <Container>

      <Main>
        <Pressable onPress={closeModal}>
          <IconX name="x" />
        </Pressable>

        <Title>Cadastro de cortes</Title>

        <Form>
          <InputName
            placeholder='Nome do corte'
            placeholderTextColor={theme.colors.title}
            value={name}
            onChangeText={setName}
          />

          <InputName
            placeholder='Preço'
            placeholderTextColor={theme.colors.title}
            value={price}
            onChangeText={setPrice}
          />

          <WrapperButton>

            <ButtonDefault
              title="Enviar"
              onPress={handleCadasterCut}
              backgroundColor={theme.colors.primary}
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