import React, { useState } from 'react';
import { Modal, Alert } from 'react-native';

import { ModalDetailsService } from '../Modals/ModalDetailsService';
import { Props } from './types';

import { api } from '../../services/api';

import {
  Container,
  Image,
  Details,
  Name,
  Curt,
  WrapperPrice,
  Price,
} from './styles';



export function ListScheduling({ data, setAtt }: Props) {
  const [visible, setVisible] = useState(false);

  function openDetails() {
    setVisible(true)
  }

  function closeModal() {
    setVisible(false)
  }

  async function handleFinishService(){
    try {
      await api.delete(`/schedule?schedule_id=${data.id}`);
      closeModal();
      setAtt();
      console.log("Finish.")
      
    } catch (err) {
      Alert.alert("Opa", "Não foi possível finalizar o serviço.")
      console.log(err)
    }
  }

  return (
    <Container onPress={openDetails}>

      <Image />

      <Details>
        <Name>{data.customer}</Name>
        <Curt>Corte: {data.haircut.name}</Curt>
      </Details>

      <WrapperPrice>
        <Price>{data.haircut.price}$</Price>
      </WrapperPrice>


      <Modal
        visible={visible}
        transparent={true}
        animationType='fade'
      >

        <ModalDetailsService
          closeModal={closeModal}
          data={data}
          handleFinishService={() => handleFinishService()}
          setAtt={setAtt}
        />


      </Modal>


    </Container>
  );
}