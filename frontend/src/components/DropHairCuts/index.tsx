import React from 'react';

import { IHaircut } from '../../screens/Scheduling';

import {
  Container,
  Main,
  WrapperScroll,
  ButtonHairCut,
  Title,
} from './styles';


interface Props {
  hairCuts: IHaircut[];
  setVisibleDrop: () => void;
  setHairCutSelected: (value: IHaircut) => void;
}

export function DropHairCuts({
  hairCuts,
  setVisibleDrop,
  setHairCutSelected
} : Props) {


  function handleCategorySelected(item: IHaircut){
    setHairCutSelected({
      name: item.name,
      id: item.id,
      price: item.price,
    });
    setVisibleDrop();
  }

  console.log(hairCuts);
  
  return (
    <Container>
        <Main>
          <WrapperScroll>
              {hairCuts.map((item, index) => {
                return (
                <ButtonHairCut 
                key={item.id} 
                onPress={() =>handleCategorySelected(item)}
                >
                    <Title>{item.name}</Title>
                </ButtonHairCut>
                )
              })}
          </WrapperScroll>
        </Main>
    </Container>
  );
}