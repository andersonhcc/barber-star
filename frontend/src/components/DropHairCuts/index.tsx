import React from 'react';

import {
  Container,
  Main,
  WrapperScroll,
  ButtonHairCut,
  Title,
} from './styles';

import { Props } from './types';
import { IHairCuts } from '@screens/HairCuts/types';

export function DropHairCuts({
  hairCuts,
  setVisibleDrop,
  setHairCutSelected
} : Props) {

  function handleCategorySelected(item: IHairCuts){
    setHairCutSelected({
      name: item.name,
      id: item.id,
      price: item.id
    });
    setVisibleDrop();
  }

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