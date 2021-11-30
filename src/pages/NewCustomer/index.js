import React, {useState} from 'react';
import NavBar from '../../components/NavBar';
import {AreaButtons, Component, Container, FormBox} from './style';
import {TextInput} from 'react-native-paper';
import DatePicker from 'react-native-datepicker';
import SelectItem from '../../components/SelectItem';
import ButtonAction from '../../components/ButtonAction';
import {colors} from '../../services/colors';
import {addClient} from '../../services/api';
import {useNavigation} from '@react-navigation/native';

const NewCustomer = () => {
  const today = new Date();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState(today.toLocaleDateString('pt-BR'));
  const [service, setService] = useState('');
  const [repeat, setRepeat] = useState('');
  const navigation = useNavigation();

  const serviceItems = [
    {label: 'NATV', value: 'NATV'},
    {label: 'NEON', value: 'NEON'},
    {label: 'PHCS', value: 'PHCS'},
  ];
  const repeatTypes = [
    {label: 'MENSALMENTE', value: 'MONTH'},
    {label: 'BIMESTRALMENTE', value: 'BIMONTH'},
  ];
  const handleAddClient = page => {
    addClient({name, price, date, service, repeat});
    navigation.navigate(page);
  };
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
              marginTop: 15,
            },
          }}
        />
        <SelectItem
          items={serviceItems}
          label="Selecione um serviço"
          setItem={setService}
        />
        <SelectItem
          items={repeatTypes}
          label="Tipo de repetição"
          setItem={setRepeat}
        />
        <AreaButtons>
          <ButtonAction
            bgColor={colors.lightcoral}
            txtColor={colors.black}
            label="Cancelar"
          />
          <ButtonAction
            bgColor={colors.royalblue}
            txtColor={colors.white}
            label="Salvar"
            action={() => handleAddClient('Pagamentos Futuros')}
          />
        </AreaButtons>
      </FormBox>

      <NavBar add={true} />
    </Container>
  );
};

export default NewCustomer;
