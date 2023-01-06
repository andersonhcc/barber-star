import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { useAuth } from '../../context/AuthContext';

import theme from '../../styles/theme';

import { ListScheduling } from '../../components/ListScheduling';
import { ButtonDefault } from '../../components/ButtonDefault';

import { api } from '../../services/api';

import {
  Container,
  Header,
  Title,
  SubTitle,
  BoxPublicity,
  TextPublicty,
  LabelPublicty,
  ButtonPublicty,
  TitleButton,
  Main,
  TitleScheduling,
  WrapperList,
  Footer,
  ButtonSignUp,
  Icon,
} from './styles';

export interface IHaircut {
  name: string;
  price: string;
}

export interface IScheduling {
  id: string;
  customer: string;
  haircut: IHaircut;
}

export function Scheduling() {
  const [scheduling, setScheduling] = useState<IScheduling[] | []>([]);
  const { user, signOut } = useAuth();


  async function getScheduling() {

    const response = await api.get('/schedule');

    setScheduling(response.data);


  }

  useEffect(() => {

    getScheduling()

  }, [])


  return (
    <Container>

      <Header>
        <Title>Olá, {"\n"}<SubTitle>{user.name}</SubTitle></Title>

        <ButtonSignUp onPress={signOut}>
          <Icon />
        </ButtonSignUp>

      </Header>

      <BoxPublicity>
        <TextPublicty>50% off</TextPublicty>
        <LabelPublicty>Adiquira já o plano premium!</LabelPublicty>

        <ButtonPublicty>
          <TitleButton>Aproveitar</TitleButton>
        </ButtonPublicty>

      </BoxPublicity>

      <Main>
        <TitleScheduling>Agenda</TitleScheduling>

        <WrapperList>
          <FlatList
            contentContainerStyle={{ paddingBottom: 170 }}
            data={scheduling}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <ListScheduling data={item} />
            )}

          />
        </WrapperList>
      </Main>

      <Footer>
        <ButtonDefault
          title="Cadastrar"
          backgroundColor={theme.colors.background_finish}
        />

      </Footer>

    </Container>
  );
}