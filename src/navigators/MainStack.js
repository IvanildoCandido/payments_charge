import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Summary from '../pages/Summary';
import PaidPayments from '../pages/PaidPayments';
import {colors} from '../services/colors';
import NextPayments from '../pages/NextPayments';
import LatePayments from '../pages/LatePayments';
const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Summary"
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
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
      <Stack.Screen
        name="Pagamentos Futuros"
        component={NextPayments}
        options={{headerTintColor: colors.black, headerTitleAlign: 'center'}}
      />
      <Stack.Screen
        name="Pagamentos Atrasados"
        component={LatePayments}
        options={{headerTintColor: colors.black, headerTitleAlign: 'center'}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
