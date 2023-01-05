import React from 'react';

import {
  Container,
  Image,
  Details,
  Name,
  Curt,
  WrapperPrice,
  Price,
} from './styles';

export function ListScheduling() {
  return (
    <Container>

      <Image />

      <Details>
        <Name>Anderson</Name>
        <Curt>Corte: normal</Curt>
      </Details>

      <WrapperPrice>
        <Price>20$</Price>
      </WrapperPrice>

    </Container>
  );
}