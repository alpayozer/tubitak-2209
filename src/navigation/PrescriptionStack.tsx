import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

//screens
import Prescription from '../screens/PrescriptionScrenn';
import PrescriptionDetail from '../screens/PrescriptionDetail';

const PrescriptionStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PrescriptionScreen" component={Prescription} />
      <Stack.Screen
        name="PrescriptionDetailScreen"
        component={PrescriptionDetail}
      />
    </Stack.Navigator>
  );
};

export default PrescriptionStack;
