import React from 'react';
import { FlatList } from 'react-native';

import { ListScheduling } from '../../components/ListScheduling';
import { ButtonDefault } from '../../components/ButtonDefault';

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
import theme from '../../styles/theme';


export function Scheduling() {
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
          contentContainerStyle={{ paddingBottom: 170}}
          data={[1,2,3, 4, 5, 6, 7, 8]}
          keyExtractor={item => item}
          showsVerticalScrollIndicator={false}
          renderItem={({ item}) => (
              <ListScheduling data={item}/>
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