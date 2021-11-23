import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SummaryStack from './navigators/SummaryStack';

const App = () => {
  return (
    <NavigationContainer>
      <SummaryStack />
    </NavigationContainer>
  );
};

export default App;
