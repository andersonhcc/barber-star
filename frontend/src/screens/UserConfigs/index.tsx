import React, { useState } from 'react';
import { Modal } from 'react-native';

import { ButtonDefault } from '../../components/ButtonDefault';
import { OptionProfile } from '../../components/OptionProfile';
import { ModalPlans } from '../../components/ModalPlans';

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
  const { user } = useAuth();
  const theme = useTheme();
  const [visible, setVisible] = useState(false);
  
  return (
    <Container>

      <Header>
        <Title>Minha conta</Title>
      </Header>

      <Main>

        <OptionProfile
          title="Nome barbearia"
          placeholder={user.name}
        />

        <OptionProfile
          title="Endereço"
          placeholder={user.endereco}
        />

        <TitlePlan>Seu plano</TitlePlan>
        <BoxPlan>
          <SubTitlePLan>Plano Grátis</SubTitlePLan>
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
  );
}