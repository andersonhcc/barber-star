import React, { useState } from 'react';
import { Pressable, Alert } from 'react-native';
import { ButtonDefault } from '../../ButtonDefault';

import { IHaircut } from '@screens/Scheduling';


import { useTheme } from 'styled-components';
import { useAuth } from '@context/AuthContext';


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
  hairCuts: IHaircut[];
}

export function ModalCreateCut({ closeModal, setAtt, hairCuts }: Props) {

  const theme = useTheme();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const { user } = useAuth();




  async function handleCadasterCut() {
    const priceFormatted = Number(price);
    setIsLoading(true);
    console.log(hairCuts.length);

    if(user.subscriptions.status !== 'active' && hairCuts.length === 3){

      Alert.alert("Error");
      setIsLoading(false);

    }


    if (name === '' || price === '') {
      setIsLoading(false)
      return;
    }

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
    finally {
      setIsLoading(false)
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
              disabled={disabled}
            />

          </WrapperButton>

        </Form>

      </Main>

    </Container>
  );
}