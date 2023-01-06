import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

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
} from './styles';

interface IScheduling {
  name: string;
  price: string;
  curt: string;
}

export function Scheduling() {
  const [scheduling, setScheduling] = useState<IScheduling[]>([]);


  async function getScheduling() {

    const response = api.get('/haircut', {
      
    })

  }

  useEffect(() => {

    getScheduling()

  }, [])


  return (
    <Container>

      <Header>
        <Title>Olá, {"\n"}<SubTitle>Antonion's</SubTitle></Title>
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
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            keyExtractor={item => item}
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