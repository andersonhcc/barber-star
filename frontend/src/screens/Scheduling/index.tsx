import React, { useEffect, useState, useRef } from 'react';
import { FlatList, Animated, Modal, Alert } from 'react-native';

import { useAuth } from '@context/AuthContext';

import { ListScheduling } from '@components/ListScheduling';
import { ModalScheduling } from '@components/Modals/ModalScheduling';
import { ModalPlans } from '@components/Modals/ModalPlans';

import { BannerPublicity } from '@components/BannerPublicity';

import { api } from '@services/api';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Main,
  TitleScheduling,
  WrapperList,
  ButtonSignUp,
  Icon,
  Default,
  TextDefault,
  WrapperTitleScheduling,
  ButtonAddScheduling,
  LabelButton,
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
  const [visiblePlans, setVisiblePlans] = useState(false);
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

      setAtt(!att);
      
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

  }, [att])



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

        <BannerPublicity setVisiblePlans={setVisiblePlans}/>



        <Main>
          <WrapperTitleScheduling>

            <TitleScheduling>Agenda</TitleScheduling>
            <ButtonAddScheduling onPress={() => setVisible(true)}>
              <LabelButton>+</LabelButton>
            </ButtonAddScheduling>
          
          </WrapperTitleScheduling>

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


      </Animated.View >

      <Modal
        visible={visible}
        transparent={true}
        animationType='fade'
      >
        <ModalScheduling
          closeScheduling={() => setVisible(false)}
          hairCuts={hairCuts}
          cadasterService={cadasterService}

        />

      </Modal>

      <Modal visible={visiblePlans}>
        <ModalPlans 
          setVisible={() => setVisiblePlans(false)}
        />
      </Modal>



    </Container>

  );
}