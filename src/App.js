import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './navigators/MainStack';
import ModalContext from './contexts/ModalContext';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState({});

  return (
    <ModalContext.Provider value={{visible, setVisible, selected, setSelected}}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ModalContext.Provider>
  );
};

export default App;
