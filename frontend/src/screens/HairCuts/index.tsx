import React, { useState, useEffect } from 'react';
import { FlatList, Modal, Switch } from 'react-native';

import { ButtonDefault } from '@components/ButtonDefault';
import { ModalEditCut } from '@components/Modals/ModalEditCut';
import { ModalCreateCut } from '@components/Modals/ModalCreateCut';

import { useTheme } from 'styled-components';

import { api } from '@services/api';

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

interface IHairCuts {
  id: string;
  name: string;
  price: string;
  status: boolean;
}

export function HairCuts() {

  const [hairCuts, setHairCuts] = useState<IHairCuts[]>([]);
  const [editCut, setEditCut] = useState({} as IHairCuts);
  const [visible, setVisible] = useState(false);
  const [visibleCadaster, setVisibleCadaster] = useState(false);
  const [att, setAtt] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);

  const theme = useTheme();

  async function getHairCuts() {

    const response = await api.get(`/haircut?status=${isEnabled}`);

    setHairCuts(response.data);
  }

  function editCurt(data: IHairCuts) {

    setVisible(true)
    setEditCut(data);
  }

  function toggleSwitch() {

    setIsEnabled(prevState => !prevState)
    setAtt(!att);
  }

  useEffect(() => {
    getHairCuts();
  }, [att])

  return (
    <Container>

      <Header>
        <Title>
          Modelo de cortes
        </Title>

        <Switch
          trackColor={{ false: '#767577', true: `${theme.colors.check}` }}
          thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ marginRight: 40 }}
        />

      </Header>

      <Main>
        <FlatList
          data={hairCuts}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <BoxHairCut onPress={() => editCurt(item)}>
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
          onPress={() => setVisibleCadaster(true)}
        />
      </Footer>


      <Modal
        transparent={true}
        visible={visible}
      >

        <ModalEditCut
          closeModal={() => setVisible(false)}
          data={editCut}
          setAtt={() => setAtt(!att)}
        />

      </Modal>


      <Modal
        transparent={true}
        visible={visibleCadaster}
      >

        <ModalCreateCut
          closeModal={() => setVisibleCadaster(false)}
          setAtt={() => setAtt(!att)}
          hairCuts={hairCuts}
        />


      </Modal>

    </Container>
  );
}