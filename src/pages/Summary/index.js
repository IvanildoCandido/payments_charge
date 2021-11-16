import React, {useState, useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';
import {getClients} from '../../services/api';
import styled from 'styled-components';

const Item = styled.Text`
  font-size: 25px;
  color: red;
`;

const Summary = () => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    getClients().then(response => setClients(response));
  }, []);
  return (
    <View>
      <View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={clients}
          renderItem={({item}) => {
            return (
              <View>
                <Item>{item.name}</Item>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Summary;
