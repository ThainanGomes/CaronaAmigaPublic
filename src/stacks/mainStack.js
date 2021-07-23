import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Hello from '../telas/Hello';
import Inicial from '../telas/Inicial';
import Login from '../telas/Login';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName="Hello" 
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="Inicial" component={Inicial} />
        <Stack.Screen name="Login" component={Login} />        
    </Stack.Navigator>
);
