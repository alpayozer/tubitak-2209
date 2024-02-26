import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//screens
import Doctors from '../../screens/UserScreen/Doctors';
import DoctorDetail from '../../screens/UserScreen/DoctorDetail';

const DoctorStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="DoctorsScreen" component={Doctors} />
      <Stack.Screen name="DoctorDetailScreen" component={DoctorDetail} />
    </Stack.Navigator>
  );
};

export default DoctorStack;
