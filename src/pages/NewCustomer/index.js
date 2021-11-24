import React from 'react';
import {Text} from 'react-native';
import NavBar from '../../components/NavBar';
import {Container} from './style';

const NewCustomer = () => {
  return (
    <Container>
      <Text>Novo Cliente</Text>
      <NavBar add={true} />
    </Container>
  );
};

export default NewCustomer;
