import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Summary from '../pages/Summary';
import PaidPayments from '../pages/PaidPayments';
import {colors} from '../services/colors';
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="Summary">
      <Stack.Screen
        name="Resumo Financeiro"
        component={Summary}
        options={{headerTintColor: colors.black, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Vencimentos Recebidos"
        component={PaidPayments}
        options={{headerTintColor: colors.black, headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
