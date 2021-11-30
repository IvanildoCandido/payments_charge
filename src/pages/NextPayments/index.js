import React, {useEffect, useState} from 'react';
import {getClients} from '../../services/api';
import ListItem from '../../components/ListItem';
import NavBar from '../../components/NavBar';
import {Container, ListNext} from './style';
import {listItemFormat} from '../../services/utils';
import Loader from '../../components/Loader';

const NextPayments = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getClients().then(response => {
      setClients(response);
      setLoading(false);
    });
  }, []);
  return (
    <Container>
      {loading && <Loader />}
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
