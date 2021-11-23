import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Summary from '../pages/Summary';
import { colors } from '../services/colors';
const Stack = createStackNavigator();

const SummaryStack = () => {
  return (
    <Stack.Navigator initialRouteName="Summary">
      <Stack.Screen
        name="Resumo Financeiro"
        component={Summary}
        options={{headerTintColor: colors.black, headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default SummaryStack;
