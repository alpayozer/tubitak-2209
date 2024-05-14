import React, {useCallback, useContext, useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import UserTabNavigator from './UserStacks/TabNavigator';
import SignScreen from '../screens/SignScreen';
import DoctorTabNavigator from './DoctorStacks/TabNavigator';
import {AuthContext} from '../contexts/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppUser} from '../models/User/appUser';

const Stack = createStackNavigator();

const StackNavigator = () => {
  // const user = true;
  const authContext = useContext(AuthContext);
  const [status, setStatus] = useState('loading');
  const [user, setUser] = useState<AppUser | null>(null);
  let parseUser: AppUser | null;

  const loadJWT = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      const parsedValue = value ? JSON.parse(value) : null;

      authContext.setAuthState({
        access_token: parsedValue.access_token || null,
        refresh_token: parsedValue.refresh_token || null,
        authenticated: parsedValue.access_token !== null,
      });
      setStatus('success');
    } catch (error: any) {
      setStatus('error');
      console.log(`Keychain Error: ${error.message}`);
      authContext.setAuthState({
        access_token: null,
        refresh_token: null,
        authenticated: false,
      });
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const userr = await AsyncStorage.getItem('user');
      if (userr) {
        parseUser = JSON.parse(userr);
        setUser(parseUser);
      }
      // rest of your logic...
    };

    fetchUser();
    loadJWT();
  }, [loadJWT]);

  if (!authContext.authenticatedUser) {
    console.log('null return');
    return null;
  }

  if (authContext?.authState?.authenticated === false) {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={LoginScreen} />
        <Stack.Screen name="SignPage" component={SignScreen} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="TabPage"
          component={
            user?.user.role === 'patient'
              ? UserTabNavigator
              : DoctorTabNavigator
          }
        />
      </Stack.Navigator>
    );
  }

  // return (
  //   <Stack.Navigator screenOptions={{headerShown: false}}>
  //     <Stack.Screen name="LoginPage" component={LoginScreen} />
  //     <Stack.Screen name="SignPage" component={SignScreen} />
  //     <Stack.Screen
  //       name="TabPage"
  //       component={user ? UserTabNavigator : DoctorTabNavigator}
  //     />
  //   </Stack.Navigator>
  // );
};

export default StackNavigator;
