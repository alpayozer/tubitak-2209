//AuthContext.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useRoute} from '@react-navigation/native';
import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);
// const {Provider} = AuthContext;
interface AuthStateProps {
  access_token: String | null;
  refresh_token: String | null;
  authenticated: Boolean | null;
}

interface AuthContextProps {
  authState: AuthStateProps;
  getAccessToken: () => String | null;
  setAuthState: Dispatch<SetStateAction<AuthStateProps>>;
  logout: () => void;
  authenticatedUser: () => Boolean | null;
}

const AuthProvider = ({children}: any) => {
  const [authState, setAuthState] = useState<AuthStateProps>({
    access_token: null,
    refresh_token: null,
    authenticated: null,
  });

  const logout = async () => {
    // await Keychain.resetGenericPassword();
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('username');
    setAuthState({
      access_token: null,
      refresh_token: null,
      authenticated: false,
    });
  };

  const getAccessToken = () => {
    return authState.access_token;
  };

  const authenticatedUser = () => {
    return authState.authenticated;
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        getAccessToken,
        setAuthState,
        logout,
        authenticatedUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthContext, AuthProvider};
