import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//screens
import Home from '../../screens/DoctorScreen/Home';
import Patients from '../../screens/DoctorScreen/Patients';
import Appointment from '../../screens/DoctorScreen/Appointment';
import Prescription from '../../screens/DoctorScreen/Prescription';
import Calendar from '../../screens/DoctorScreen/Calendar';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const size = 30;

  const calendarIcon = ({color}: {color: string}) => (
    <Icon name="calendar-multiselect" size={size} color={color} />
  );
  const homeIcon = ({color}: {color: string}) => (
    <Icon name="home" size={size} color={color} />
  );
  const appointmentIcon = ({color}: {color: string}) => (
    <Icon name="stethoscope" size={size} color={color} />
  );
  const prescriptionsIcon = ({color}: {color: string}) => (
    <Icon name="clipboard-pulse-outline" size={size} color={color} />
  );
  const patientIcon = ({color}: {color: string}) => (
    <Icon name="account-multiple-outline" size={size} color={color} />
  );
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        options={{tabBarIcon: homeIcon}}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{tabBarIcon: patientIcon}}
        name="Patients"
        component={Patients}
      />
      <Tab.Screen
        options={{tabBarIcon: appointmentIcon}}
        name="Appointment"
        component={Appointment}
      />
      <Tab.Screen
        options={{tabBarIcon: prescriptionsIcon}}
        name="Prescriptions"
        component={Prescription}
      />
      <Tab.Screen
        options={{
          tabBarIcon: calendarIcon,
        }}
        name="Calendar"
        component={Calendar}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
