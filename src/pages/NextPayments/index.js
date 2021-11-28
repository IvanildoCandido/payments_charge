import React from 'react';
import {Text} from 'react-native';
import ListItem from '../../components/ListItem';
import NavBar from '../../components/NavBar';
import {Container} from './style';

const NextPayments = () => {
  return (
    <Container>
      <ListItem
        data={{
          date: '25',
          day: 'TER',
          service: 'NATV',
          client: 'Italo Serra Branca',
          status: 'Vencendo hoje!',
          price: 'R$ 25,00',
        }}
      />
      <NavBar next={true} />
    </Container>
  );
};

export default NextPayments;
