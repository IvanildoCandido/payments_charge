import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './navigators/MainStack';
import ModalContext from './contexts/ModalContext';

const App = () => {
  const [visible, setVisible] = useState(false);
  return (
    <ModalContext.Provider value={{visible, setVisible}}>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </ModalContext.Provider>
  );
};

export default App;
