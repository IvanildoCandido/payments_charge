import React, {useState} from 'react';
import NavBar from '../../components/NavBar';
import {Component, Container, FormBox} from './style';
import {TextInput} from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
const NewCustomer = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(new Date());
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
        <Component>
          <TextInput
            mode="outlined"
            label="Valor"
            value={price}
            onChangeText={price => setPrice(price)}
          />
        </Component>
        <DatePicker
          style={{width: '100%', height: 50}}
          date={date}
          format="DD/MM/YYYY"
          onDateChange={date => setDate(date)}
          customStyles={{
            dateIcon: {
              position: 'absolute',
              left: 0,
              top: 10,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
              height: 55,
              marginTop: 15
            },
          }}
        />
      </FormBox>

      <NavBar add={true} />
    </Container>
  );
};

export default NewCustomer;
