import React from 'react';
import {View, Text} from 'react-native';
import NavBar from '../../components/NavBar';
import {Container} from './style';

const PaidPayments = () => {
  return (
    <Container>
      <Text>Vencimentos</Text>
      <NavBar day={true} />
    </Container>
  );
};

export default PaidPayments;
