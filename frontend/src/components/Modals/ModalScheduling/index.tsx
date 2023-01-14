import React, { useState } from 'react';
import { Pressable, Modal, Alert } from 'react-native';
import { ButtonDefault } from '../../ButtonDefault';
import { useTheme } from 'styled-components';

import { IHaircut, ICreateServiceDTO } from '../../../screens/Scheduling';
import { DropHairCuts } from '../../DropHairCuts'

import {
  Container,
  Main,
  IconX,
  Title,
  Form,
  InputName,
  WrapperButton,
  TextChoose,
  ButtonHairCuts,
  BoxInfo,
  IconMaterial,
  TitleHairCut,
  IconFeather,
} from './styles';

interface Props {
  closeScheduling(): void;
  hairCuts: [] | IHaircut[]
  cadasterService({ customer, haircut_id }: ICreateServiceDTO): void;
}

export function ModalScheduling({ closeScheduling, hairCuts, cadasterService }: Props) {

  const theme = useTheme();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [visibleDrop, setVisibleDrop] = useState(false);
  const [hairCutSelected, setHairCutSelected] = useState({
    name: 'Corte'
  } as IHaircut);

  async function handleCadasterService() {

    const data = {
      customer: name,
      haircut_id: hairCutSelected.id,
    }

    try {

      cadasterService(data);
      closeScheduling();
      
      //feedback user;


    } catch (error) {

      Alert.alert("Opa", "Algo de errado aconteceu.");
      console.log(error);

    }

  }

  return (
    <Container>

      <Main>
        <Pressable onPress={closeScheduling}>
          <IconX name="x" />
        </Pressable>

        <Title>Cadastro</Title>

        <Form>
          <InputName
            placeholder='Nome do cliente'
            placeholderTextColor={theme.colors.title}
            value={name}
            onChangeText={setName}
          />

          <TextChoose>Escolha o corte</TextChoose>

          <ButtonHairCuts onPress={() => setVisibleDrop(true)}>

            <BoxInfo>
              <IconMaterial name="" />
              <TitleHairCut>{hairCutSelected.name}</TitleHairCut>
            </BoxInfo>

            <IconFeather name="chevron-down" />
          </ButtonHairCuts>


          <WrapperButton>

            <ButtonDefault
              title="Enviar"
              onPress={handleCadasterService}
              backgroundColor={theme.colors.primary}
              width={200}
              height={40}
              isLoading={isLoading}

            />

          </WrapperButton>

        </Form>

      </Main>


      <Modal
        visible={visibleDrop}
        transparent={true}
        animationType='fade'
      >

        <DropHairCuts
          setVisibleDrop={() => setVisibleDrop(false)}
          hairCuts={hairCuts}
          setHairCutSelected={setHairCutSelected}

        />

      </Modal>


    </Container>
  );
}