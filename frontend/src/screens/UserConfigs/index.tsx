import React, { useState } from 'react';
import { Modal, Alert, KeyboardAvoidingView, Platform } from 'react-native';

import { api } from '../../services/api';

import { ButtonDefault } from '../../components/ButtonDefault';
import { OptionProfile } from '../../components/OptionProfile';
import { ModalPlans } from '../../components/Modals/ModalPlans';

import { useAuth } from '../../context/AuthContext';
import { useTheme } from 'styled-components';

import {
  Container,
  Header,
  Title,
  Main,
  TitlePlan,
  BoxPlan,
  SubTitlePLan,
  ButtonChangePlan,
  TitleButton,
  Buttons,
} from './styles';

export function UserConfigs() {
  const { user, setUser, isPremium } = useAuth();
  const theme = useTheme();
  const [name, setName] = useState(user.name);
  const [endereco, setEndereco] = useState(user.endereco);
  const [visible, setVisible] = useState(false);
  const isIOS = Platform.OS === 'ios';

  async function handleEdit() {

    if (name === '' || endereco === '') {
      return;
    }
    try {

      const response = await api.put("/users", {
        name,
        endereco,
      });

      setUser({
        name,
        endereco,
        email: user.email,
        id: user.id,
        token: user.token,
      })

      Alert.alert("Atualizado com sucesso!");

    } catch (error) {

      console.log(error);
      Alert.alert("Atualização", "Deu algum error.");
    }
  }

  return (

    <KeyboardAvoidingView
    keyboardVerticalOffset={500}
      style={{ flex: 1 }}
    >

      <Container>

        <Header>
          <Title>Minha conta</Title>
        </Header>

        <Main>

          <OptionProfile
            title="Nome barbearia"
            value={name}
            onChangeText={setName}
          />

          <OptionProfile
            title="Endereço"
            value={endereco}
            onChangeText={setEndereco}
          />

          <TitlePlan>Seu plano</TitlePlan>
          <BoxPlan>
            <SubTitlePLan isPremium={isPremium}>{isPremium ? "Plano Premium" : "Plano Grátis"}</SubTitlePLan>
            <ButtonChangePlan
              activeOpacity={0.1}
              onPress={() => setVisible(true)}
            >
              <TitleButton>Mudar Plano</TitleButton>
            </ButtonChangePlan>
          </BoxPlan>

          <Buttons>

            <ButtonDefault
              title="Salvar"
              backgroundColor={theme.colors.primary}
              onPress={handleEdit}
            />
          </Buttons>

        </Main>

        <Modal
          animationType='fade'
          visible={visible
          }>
          <ModalPlans
            setVisible={() => setVisible(false)}
          />
        </Modal>

      </Container>

    </KeyboardAvoidingView>



  );
}