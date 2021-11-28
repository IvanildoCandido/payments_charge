import React from 'react';

import {
  BoxDate,
  Container,
  DateText,
  DayText,
  InfoArea,
  ServiceText,
  ClientText,
  StatusText,
  PriceInfo,
  DataInfo,
} from './style';

const ListItem = () => {
  return (
    <Container>
      <DataInfo>
        <BoxDate>
          <DateText>25</DateText>
          <DayText>QUA</DayText>
        </BoxDate>
        <InfoArea>
          <ServiceText>NATV</ServiceText>
          <ClientText>Ítalo Serra Branca</ClientText>
          <StatusText>Vencendo hoje!</StatusText>
        </InfoArea>
      </DataInfo>
      <PriceInfo>R$ 25,00</PriceInfo>
    </Container>
  );
};

export default ListItem;
