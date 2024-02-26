import 'react-native-gesture-handler';
import 'react-native-screens';
import React from 'react';
import StackNavigator from '../navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from '../contexts/AuthContext';

const Router = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default Router;
