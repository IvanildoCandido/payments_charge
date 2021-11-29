import React, {useEffect, useState} from 'react';
import {getClients} from '../../services/api';
import ListItem from '../../components/ListItem';
import NavBar from '../../components/NavBar';
import {Container, ListNext} from './style';
import {listItemFormat} from '../../services/utils';

const NextPayments = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    getClients().then(response => setClients(response));
  }, []);
  return (
    <Container>
      {clients.length > 0 && (
        <ListNext
          data={clients}
          renderItem={({item}) => <ListItem data={listItemFormat(item)} />}
        />
      )}
      <NavBar next={true} />
    </Container>
  );
};

export default NextPayments;
