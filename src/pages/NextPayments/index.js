import React from 'react';
import {Text} from 'react-native';
import NavBar from '../../components/NavBar';
import {Container} from './style';

const NextPayments = () => {
  return (
    <Container>
      <Text>Próximos Pagamentos</Text>
      <NavBar next={true} />
    </Container>
  );
};

export default NextPayments;
