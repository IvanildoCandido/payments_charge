import React, {useContext} from 'react';
import ModalContext from '../../contexts/ModalContext';

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

const ListItem = ({data: {date, day, service, name, status, price}}) => {
  const {setVisible} = useContext(ModalContext);
  return (
    <Container onPress={() => setVisible(true)}>
      <DataInfo>
        <BoxDate>
          <DateText>{date}</DateText>
          <DayText>{day}</DayText>
        </BoxDate>
        <InfoArea>
          <ServiceText>{service}</ServiceText>
          <ClientText>{name}</ClientText>
          <StatusText>{status}</StatusText>
        </InfoArea>
      </DataInfo>
      <PriceInfo>{price}</PriceInfo>
    </Container>
  );
};

export default ListItem;
