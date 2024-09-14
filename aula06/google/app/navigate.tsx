import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import index from './index.tsx';  // Tela principal
import email from './email.tsx';  // Outra tela

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="index">
        <Stack.Screen name="index" component={index} />
        <Stack.Screen name="email" component={email} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
