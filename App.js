import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/mainStack';
import UsercontextProvider from './src/context/UserContext'

export default () => { 
  return (
    <UsercontextProvider>
      <NavigationContainer>
        <MainStack/>
      </NavigationContainer>
    </UsercontextProvider>
  );
}


