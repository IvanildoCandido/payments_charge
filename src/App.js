import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LatePayments from './pages/LatePayments';
import NextPayments from './pages/NextPayments';
import PaidPayments from './pages/PaidPayments';
import Summary from './pages/Summary';
import { colors } from './services/colors';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Summary">
        <Stack.Screen
          name="Resumo Financeiro"
          component={Summary}
          options={{headerTintColor: colors.black, headerTitleAlign: 'center'}}
        />
        <Stack.Screen
          name="Próximos Pagamentos"
          component={NextPayments}
          options={{headerTintColor: 'slateblue'}}
        />
        <Stack.Screen
          name="Pagamentos Atrazados"
          component={LatePayments}
          options={{headerTintColor: 'slateblue'}}
        />
        <Stack.Screen
          name="Pagamentos Realizados"
          component={PaidPayments}
          options={{headerTintColor: 'slateblue'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
