import React, {useContext, useEffect, useState} from 'react';
import {getClients} from '../../services/api';
import ListItem from '../../components/ListItem';
import NavBar from '../../components/NavBar';
import {Container, ListNext} from './style';
import {listItemFormat} from '../../services/utils';
import Loader from '../../components/Loader';
import SelectItem from '../../components/SelectItem';
import ActionsModal from '../../components/ActionsModal';
import ModalContext from '../../contexts/ModalContext';

const NextPayments = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [month, setMonth] = useState('');
  const {visible, setVisible} = useContext(ModalContext);

  const monthItems = [
    {label: 'JANEIRO', value: 1},
    {label: 'FEVEREIRO', value: 2},
    {label: 'MARÇO', value: 3},
  ];
  useEffect(() => {
    let isMounted = true;
    getClients().then(response => {
      if (isMounted) {
        setClients(response);
        setLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <Container>
      <SelectItem
        items={monthItems}
        label="Selecione o mês"
        setItem={setMonth}
        readOnly={true}
      />
      {loading && <Loader />}
      {clients.length > 0 && (
        <ListNext
          data={clients}
          renderItem={({item}) => (
            <ListItem data={listItemFormat(item)} actionItem={setVisible} id={item.id} />
          )}
        />
      )}
      <ActionsModal visible={visible} setVisible={setVisible} />
      <NavBar next={true} />
    </Container>
  );
};

export default NextPayments;
