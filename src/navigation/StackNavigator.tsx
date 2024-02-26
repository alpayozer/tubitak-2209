import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import UserTabNavigator from './UserStacks/TabNavigator';
import SignScreen from '../screens/SignScreen';
import DoctorTabNavigator from './DoctorStacks/TabNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const user = true;
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LoginPage" component={LoginScreen} />
      <Stack.Screen name="SignPage" component={SignScreen} />
      <Stack.Screen
        name="TabPage"
        component={user ? UserTabNavigator : DoctorTabNavigator}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
