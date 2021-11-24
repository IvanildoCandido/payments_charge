import React, {useState} from 'react';
import NavBar from '../../components/NavBar';
import {Component, Container, FormBox} from './style';
import {TextInput} from 'react-native-paper';

const NewCustomer = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  return (
    <Container>
      <FormBox>
        <Component>
          <TextInput
            mode="outlined"
            label="Nome"
            value={name}
            onChangeText={name => setName(name)}
          />
        </Component>

        <TextInput
          mode="outlined"
          label="Valor"
          value={price}
          onChangeText={price => setPrice(price)}
        />
      </FormBox>

      <NavBar add={true} />
    </Container>
  );
};

export default NewCustomer;
