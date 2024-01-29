import 'react-native-gesture-handler';
import 'react-native-screens';
import React from 'react';
import StackNavigator from '../navigation/StackNavigator';
import {NavigationContainer} from '@react-navigation/native';

const Router = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Router;
