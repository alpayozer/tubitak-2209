import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import TabNavigator from './TabNavigator';
import SignScreen from '../screens/SignScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginPage" component={LoginScreen} />
      <Stack.Screen name="SignPage" component={SignScreen} />
      <Stack.Screen name="TabPage" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
