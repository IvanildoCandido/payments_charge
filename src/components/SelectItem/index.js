import React from 'react';
import {colors} from '../../services/colors';
import ServiceType from 'react-native-picker-select';

import {AddSelect, Container, LinkButton} from './style';

const SelectItem = ({items, label, setItem, readOnly}) => {
  return (
    <Container>
      <ServiceType
        style={{
          height: '100%',
          width: '100%',
        }}
        textInputProps={{
          backgroundColor: colors.deepskyblue,
          fontSize: 16,
          borderRadius: 10,
          color: 'white',
          fontWeight: 'bold',
          minWidth: `${readOnly === true ? '100%' : '85%'}`,
          textAlign: 'center',
        }}
        useNativeAndroidPickerStyle={false}
        onValueChange={value => setItem(value)}
        placeholder={{label: label, color: 'white'}}
        items={items}
      />
      {!readOnly && (
        <LinkButton onPress={() => {}}>
          <AddSelect source={require('../../assets/icons/add.png')} />
        </LinkButton>
      )}
    </Container>
  );
};

export default SelectItem;
