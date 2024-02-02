import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//screens
import Doctors from '../screens/Doctors';
import DoctorDetail from '../screens/DoctorDetail';

const DoctorStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DoctorsScreen" component={Doctors} />
      <Stack.Screen name="DoctorDetailScreen" component={DoctorDetail} />
    </Stack.Navigator>
  );
};

export default DoctorStack;
