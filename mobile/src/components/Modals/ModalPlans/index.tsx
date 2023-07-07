import React from 'react';
import { ButtonDefault } from '../../ButtonDefault';

import { useTheme } from 'styled-components';
import { useAuth } from '../../../context/AuthContext';

import {
  Container,
  Header,
  ButtonBack,
  IconLeft,
  Title,
  Main,
  BoxPlan,
  TitleFree,
  SubTitle,
  TitlePremium,
  WrapperButton,
  Content,
} from './styles';

interface Props {
  setVisible(): void;
}

export function ModalPlans({ setVisible }: Props) {
  const theme = useTheme();
  const { isPremium } = useAuth();
  return (
    <Container>
      <Content>

      <Header>
        <ButtonBack onPress={setVisible}>
          <IconLeft name="left" />
        </ButtonBack>

        <Title>Planos</Title>
      </Header>

      <Main>

        <BoxPlan>
          <TitleFree>Plano Grátis</TitleFree>
          <SubTitle>Registrar cortes</SubTitle>
          <SubTitle>Criar apenas 3 modelos</SubTitle>
          <SubTitle>Editar seu perfil</SubTitle>
        </BoxPlan>

        <BoxPlan>

          <TitlePremium>Plano Premium</TitlePremium>
          <SubTitle>Registrar cortes ilimitados</SubTitle>
          <SubTitle>Criar modelos ilimitados</SubTitle>
          <SubTitle>Editar seu perfil</SubTitle>
          <SubTitle>Editar tipos de corte</SubTitle>
          <SubTitle>Recebe todas atualizações</SubTitle>

          <WrapperButton>

            {isPremium ?

              <>
                <ButtonDefault
                  title="VOCÊ JÁ É PREMIUM"
                  backgroundColor={theme.colors.background_finish}
                  width={200}
                  fontSize={13}
                  disabled={true}

                />

                <ButtonDefault
                  title="ALTERAR ASSINATURA"
                  backgroundColor={theme.colors.white}
                  width={200}
                  fontSize={13}
                  style={{marginTop: 20}}
                  fontColor={theme.colors.background_finish}

                />
              </>
              :

              <ButtonDefault
                title="VIRAR PREMIUM"
                backgroundColor={theme.colors.primary}
                width={200}
                fontSize={13}
              />
            }

          </WrapperButton>

        </BoxPlan>

      </Main>
      </Content>
    </Container>
  );
}