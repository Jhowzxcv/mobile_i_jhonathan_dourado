import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import index from './index';
import email from './email';
import senha from './senha'

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="index" component={index} />
                <Stack.Screen name="email" component={email} />
                <Stack.Screen name="senha" component={senha} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}