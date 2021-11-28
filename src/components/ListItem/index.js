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

const ListItem = ({data: {date, day, service, client, status, price}}) => {
  return (
    <Container>
      <DataInfo>
        <BoxDate>
          <DateText>{date}</DateText>
          <DayText>{day}</DayText>
        </BoxDate>
        <InfoArea>
          <ServiceText>{service}</ServiceText>
          <ClientText>{client}</ClientText>
          <StatusText>{status}</StatusText>
        </InfoArea>
      </DataInfo>
      <PriceInfo>{price}</PriceInfo>
    </Container>
  );
};

export default ListItem;
