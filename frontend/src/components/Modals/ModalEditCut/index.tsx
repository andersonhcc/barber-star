import React, { useState } from 'react';
import { Pressable, Alert, Switch } from 'react-native';
import { ButtonDefault } from '../../ButtonDefault';
import { useTheme } from 'styled-components';

import { IHaircut } from '@screens/Scheduling';

import { api } from '../../../services/api';

import {
  Container,
  Main,
  IconX,
  Title,
  Form,
  InputName,
  WrapperButton,
  TextChoose,
  WrapperTitle,
  TitleStatus,
} from './styles';

interface Props {
  closeModal(): void;
  data: IHaircut;
  setAtt(): void;
}

export function ModalEditCut({ closeModal, data, setAtt }: Props) {

  const theme = useTheme();
  const [name, setName] = useState(data.name);
  const [price, setPrice] = useState(data.price);
  const [isLoading, setIsLoading] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  async function ediCut() {
    try {

      const response = await api.put("/haircut", {
        name,
        price,
        haircut_id: data.id,
        status: isEnabled,
      });

      closeModal();
      setAtt();


    } catch (err) {
      console.log(err);
      Alert.alert("Não foi possível editar");
    }


  }

  function toggleSwitch() {
    setIsEnabled(prevState => !prevState)
  }


  return (
    <Container>

      <Main>
        <Pressable onPress={closeModal}>
          <IconX name="x" />
        </Pressable>

        <WrapperTitle>

          <Title>Editar modelo</Title>



        </WrapperTitle>

        <Form>

          <TextChoose>Nome</TextChoose>

          <InputName
            placeholderTextColor={theme.colors.title}
            value={name}
            onChangeText={setName}
          />

          <TextChoose>Preço</TextChoose>


          <InputName
            placeholder={`${data.price}`}
            placeholderTextColor={theme.colors.title}
            value={price}
            onChangeText={setPrice}
          />

          <TitleStatus>Corte ativo?</TitleStatus>


          <Switch
            trackColor={{ false: '#767577', true: `${theme.colors.check}` }}
            thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ alignSelf: 'flex-start' }}
          />

          <WrapperButton>

            <ButtonDefault
              title="Editar"
              backgroundColor={theme.colors.primary}
              width={200}
              height={40}
              isLoading={isLoading}
              onPress={ediCut}

            />

          </WrapperButton>

        </Form>

      </Main>



    </Container>
  );
}