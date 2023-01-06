import React from 'react';
import { IScheduling } from '../../screens/Scheduling';

import {
  Container,
  Image,
  Details,
  Name,
  Curt,
  WrapperPrice,
  Price,
} from './styles';

interface Props {
  data: IScheduling
}

export function ListScheduling({ data }: Props) {

  return (
    <Container>

      <Image />

      <Details>
        <Name>{data.customer}</Name>
        <Curt>Corte: {data.haircut.name}</Curt>
      </Details>

      <WrapperPrice>
        <Price>{data.haircut.price}$</Price>
      </WrapperPrice>

    </Container>
  );
}