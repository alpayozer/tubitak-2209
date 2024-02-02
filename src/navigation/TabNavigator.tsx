import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppointmentStack from './AppointmentStack';
import ProfileStack from './ProfileStack';
import DoctorStack from './DoctorStack';
import Home from '../screens/HomeScreen';
import Prescriptions from '../screens/PrescriptionScrenn';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const size = 30;

  const homeIcon = ({color}) => <Icon name="home" size={size} color={color} />;
  const appointmentIcon = ({color}) => (
    <Icon name="stethoscope" size={size} color={color} />
  );
  const profileIcon = ({color}) => (
    <Icon name="eye-outline" size={size} color={color} />
  );
  const prescriptionsIcon = ({color}) => (
    <Icon name="clipboard-pulse-outline" size={size} color={color} />
  );
  const doctorIcon = ({color}) => (
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
        component={Prescriptions}
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
