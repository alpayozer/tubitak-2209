import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//screens
import Appointment from '../screens/Appointment';
import AppointmentSecond from '../screens/AppointmentSecond';
import AppointmentThird from '../screens/AppointmentThird';

const Stack = createNativeStackNavigator();

const AppointmentStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="AppointmentScreen" component={Appointment} />
      <Stack.Screen
        name="AppointmentSecondScreen"
        component={AppointmentSecond}
      />
      <Stack.Screen
        name="AppointmentThirdScreen"
        component={AppointmentThird}
      />
    </Stack.Navigator>
  );
};

export default AppointmentStack;
