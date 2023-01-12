import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { ButtonDefault } from '../../components/ButtonDefault';

import { useTheme } from 'styled-components';

import { api } from '../../services/api';

import {
  Container,
  Header,
  Title,
  Main,
  BoxHairCut,
  Icon,
  NameHairCut,
  Price,
  Footer,
} from './styles';

interface IHairCuts{
  id: string;
  name: string;
  price: string;
  status: boolean;
}

export function HairCuts() {

  const [hairCuts, setHairCuts] = useState<IHairCuts[]>([]);

  const theme = useTheme();

  async function getHairCuts() {

    const response = await api.get("/haircut?status=true");

    setHairCuts(response.data);
  }

  useEffect(() => {
    getHairCuts();
  },[])

  return (
    <Container>

      <Header>
        <Title>
          Modelo de cortes
        </Title>

      </Header>

      <Main>
        <FlatList
          data={hairCuts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <BoxHairCut>
              <Icon />
              <NameHairCut>{item.name}</NameHairCut>
              <Price>R$ {item.price}</Price>
            </BoxHairCut>
          )}
        />
      </Main>

      <Footer>
        <ButtonDefault 
          title="Cadastrar corte"
          backgroundColor={theme.colors.background_finish}
        />
      </Footer>

    </Container>
  );
}