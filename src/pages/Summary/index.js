import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import database from '../../config/firebaseConfig';

const Summary = () => {
  const [clients, setClients] = useState([]);

  // useEffect(() => {
  //   database.collection('clients').onSnapshot(query => {
  //     const list = [];
  //     query.forEach(doc => {
  //       list.push({...doc.data, id: doc.id});
  //     });
  //     setClients(list);
  //   });
  // }, []);
  return (
    <View>
      <Text>Resumo financeiro</Text>
    </View>
  );
};

export default Summary;
