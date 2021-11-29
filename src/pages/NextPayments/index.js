import React, {useEffect, useState} from 'react';
import {getClients} from '../../services/api';
import ListItem from '../../components/ListItem';
import NavBar from '../../components/NavBar';
import {Container} from './style';
import {listItemFormat} from '../../services/utils';
import {priceFormat} from '../../services/dateCurrency';

const NextPayments = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    getClients().then(response => setClients(response));
    console.log(priceFormat('28.34'));
  }, []);
  return (
    <Container>
      {clients.length > 0 && <ListItem data={listItemFormat(clients[0])} />}
      <NavBar next={true} />
    </Container>
  );
};

export default NextPayments;
