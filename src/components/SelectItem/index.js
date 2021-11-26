import React from 'react';
import {colors} from '../../services/colors';
import ServiceType from 'react-native-picker-select';

import {AddSelect, Container, LinkButton} from './style';

const SelectItem = ({items, label}) => {
  return (
    <Container>
      <ServiceType
        style={{
          border: '1px solid red',
          height: '100%',
          width: '100%',
        }}
        textInputProps={{
          backgroundColor: colors.deepskyblue,
          fontSize: 16,
          borderRadius: 10,
          color: 'white',
          fontWeight: 'bold',
          minWidth: '85%',
          textAlign: 'center',
        }}
        useNativeAndroidPickerStyle={false}
        onValueChange={value => console.log(value)}
        placeholder={{label: label, color: 'white'}}
        items={items}
      />
      <LinkButton onPress={() => alert('OK')}>
        <AddSelect source={require('../../assets/icons/add.png')} />
      </LinkButton>
    </Container>
  );
};

export default SelectItem;
