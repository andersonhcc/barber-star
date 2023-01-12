import React from 'react';

import { OptionProfile } from '../../components/OptionProfile';
import { useAuth } from '../../context/AuthContext';

import {
  Container,
  Header,
  Title,
  Main,
} from './styles';

export function UserConfigs() {
  const { user } = useAuth();

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

      </Main>

    </Container>
  );
}