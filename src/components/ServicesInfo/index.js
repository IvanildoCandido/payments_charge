import React from 'react';
import {Container, LeftBar, InfoText, ServicesCount, TotalInfo} from './style';

const ServicesInfo = ({color, title, quantity, total, colorCount}) => {
  return (
    <Container>
      <LeftBar color={color} />
      <InfoText color={color}>{title}</InfoText>
      <ServicesCount color={color} colorCount={colorCount}>
        {quantity}
      </ServicesCount>
      <TotalInfo color={color}>{total}</TotalInfo>
    </Container>
  );
};

export default ServicesInfo;
