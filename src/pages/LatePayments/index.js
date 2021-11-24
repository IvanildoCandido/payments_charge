import React from 'react';
import {Text} from 'react-native';
import NavBar from '../../components/NavBar';
import {Container} from './style';

const LatePayments = () => {
  return (
    <Container>
      <Text>Pagamentos Atrazados</Text>
      <NavBar past={true} />
    </Container>
  );
};

export default LatePayments;
