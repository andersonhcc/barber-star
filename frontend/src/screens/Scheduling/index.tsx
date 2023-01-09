import React, { useEffect, useState, useRef } from 'react';
import { FlatList, Animated, Modal, Alert } from 'react-native';

import { useAuth } from '../../context/AuthContext';

import theme from '../../styles/theme';

import { ListScheduling } from '../../components/ListScheduling';
import { ButtonDefault } from '../../components/ButtonDefault';
import { ModalScheduling } from '../../components/ModalScheduling';

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
  Default,
  TextDefault
} from './styles';

export interface IHaircut {
  id: string;
  name: string;
  price: string;
}

export interface ICreateServiceDTO {
  customer: string;
  haircut_id: string;
}

export interface IScheduling {
  id: string;
  customer: string;
  haircut: IHaircut;
}



export function Scheduling() {
  const [scheduling, setScheduling] = useState<IScheduling[] | []>([]);
  const [hairCuts, setHairCuts] = useState<IHaircut[] | []>([]);
  const { user, signOut } = useAuth();
  const [visible, setVisible] = useState(false);
  const opacityAnimated = useRef(new Animated.Value(0)).current;


  //refactor after

  const [att, setAtt] = useState(false);


  async function getScheduling() {

    const response = await api.get('/schedule');

    setScheduling(response.data);
  }

  //verify
  async function getHairCuts(){
    
    const response = await api.get('/haircut?status=true');

    setHairCuts(response.data);
  }

  // ecadaster service

  async function cadasterService({ customer, haircut_id } : ICreateServiceDTO){

    try {

      const response = await api.post('/schedule', {
        customer,
        haircut_id,
      });

      // feedback user;
      
    } catch (err) {

      console.log(err);
      Alert.alert("Opa", "Algo de errado aconteceu");
      
    }




  }


  useEffect(() => {

    Animated.timing(opacityAnimated, {
      toValue: 1,
      duration: 3500,
      useNativeDriver: false,
    }).start();

    getScheduling();
    getHairCuts();

  }, [])



  return (

    <Container>

      <Animated.View
        style={{
          flex: 1,
          opacity: opacityAnimated,
        }}
      >

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
              contentContainerStyle={{ paddingBottom: 170, flexGrow: 1 }}
              data={scheduling}
              keyExtractor={item => item.id}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <ListScheduling data={item} setAtt={() => setAtt(!att)}/>
              )}

              ListEmptyComponent={() => (
                <Default>
                  <TextDefault>Não há serviços agendados!</TextDefault>
                </Default>
              )}
            />
          </WrapperList>
        </Main>

        <Footer>
          <ButtonDefault
            title="Cadastrar"
            onPress={() => setVisible(true)}
            backgroundColor={theme.colors.background_finish}
          />

        </Footer>
      </Animated.View >

      <Modal
        visible={visible}
        transparent={true}
        animationType='fade'
      >
        <ModalScheduling
          setVisible={() => setVisible(false)}
          hairCuts={hairCuts}
          cadasterService={cadasterService}

        />

      </Modal>



    </Container>

  );
}