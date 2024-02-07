import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../screens/HomeScreen';

//stacks
import AppointmentStack from './AppointmentStack';
import DoctorStack from './DoctorStack';
import PrescriptionStack from './PrescriptionStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const size = 30;

  const homeIcon = ({color}: {color: string}) => (
    <Icon name="home" size={size} color={color} />
  );
  const appointmentIcon = ({color}: {color: string}) => (
    <Icon name="stethoscope" size={size} color={color} />
  );
  const profileIcon = ({color}: {color: string}) => (
    <Icon name="eye-outline" size={size} color={color} />
  );
  const prescriptionsIcon = ({color}: {color: string}) => (
    <Icon name="clipboard-pulse-outline" size={size} color={color} />
  );
  const doctorIcon = ({color}: {color: string}) => (
    <Icon name="account-multiple-outline" size={size} color={color} />
  );
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
      <Tab.Screen
        options={{tabBarIcon: homeIcon}}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{tabBarIcon: doctorIcon}}
        name="Doctors"
        component={DoctorStack}
      />
      <Tab.Screen
        options={{tabBarIcon: appointmentIcon}}
        name="Appointment"
        component={AppointmentStack}
      />
      <Tab.Screen
        options={{tabBarIcon: prescriptionsIcon}}
        name="Prescriptions"
        component={PrescriptionStack}
      />
      <Tab.Screen
        options={{tabBarIcon: profileIcon}}
        name="Profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
