import 'react-native-gesture-handler';
import 'react-native-screens';
import React from 'react';
import StackNavigator from '../navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {AuthProvider} from '../contexts/AuthContext';
import {AxiosProvider} from '../contexts/AxiosContext';

const Router = () => {
  return (
    <AuthProvider>
      <AxiosProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </AxiosProvider>
    </AuthProvider>
  );
};

export default Router;
