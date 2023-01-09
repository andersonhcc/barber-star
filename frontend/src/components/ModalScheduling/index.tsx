import React, { useState } from 'react';
import { Pressable, Modal } from 'react-native';
import { ButtonDefault } from '../ButtonDefault';
import { useTheme } from 'styled-components';

import { IHaircut } from '../../screens/Scheduling';

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
  setVisible(): void;
  hairCutSelected: string;
  setVisibleDrop: () => void;

}

export function ModalScheduling({ setVisible: closeCadastro, hairCutSelected, setVisibleDrop }: Props) {

  const theme = useTheme();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  return (
    <Container>

      <Main>
        <Pressable onPress={closeCadastro}>
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

          <TextChoose>Escolha o corte</TextChoose>

          <ButtonHairCuts onPress={() => setVisibleDrop()}>
            
            <BoxInfo>
              <IconMaterial name="" />
              <TitleHairCut>{hairCutSelected}</TitleHairCut>
            </BoxInfo>

            <IconFeather name="chevron-down"/>
          </ButtonHairCuts>


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