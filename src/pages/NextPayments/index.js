import React from 'react';
import {Text} from 'react-native';
import ListItem from '../../components/ListItem';
import NavBar from '../../components/NavBar';
import {Container} from './style';

const NextPayments = () => {
  return (
    <Container>
      <ListItem />
      <NavBar next={true} />
    </Container>
  );
};

export default NextPayments;
