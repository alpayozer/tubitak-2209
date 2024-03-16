import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from 'react';

import {User} from '../models/User/user';
import {refresh} from '../lib/auth';
import {http} from '../lib/http';
import AsyncStorage from '@react-native-async-storage/async-storage';
interface AuthContextValue {
  authenticatedUser: User | null;
  setAuthenticatedUser: Dispatch<SetStateAction<User | null>>;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextValue>(
  {} as AuthContextValue,
);

export function AuthProvider({children}: AuthProviderProps) {
  const [loaded, setLoaded] = useState(false);
  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);

  const getData = async () => {
    try {
      const at = await AsyncStorage.getItem('accessToken');
      const user = JSON.parse((await AsyncStorage.getItem('user')) || '');
      if (at !== null) {
        setAuthenticatedUser(user);
        setAccessToken(at);
        console.log(accessToken);
        console.log(user);
      }
    } catch (e) {
      console.log(e);
    }
  };

  async function refreshAuth() {
    try {
      const data = await refresh();
      setAuthenticatedUser(data.user);

      http.defaults.headers.Authorization = `Bearer ${data.tokens.refresh_token}`;
    } catch (error) {
    } finally {
      setLoaded(true);
    }
  }

  useEffect(() => {
    getData();
    if (!authenticatedUser) {
      refreshAuth();
    }
  }, []);

  if (!loaded) return null;

  return (
    <AuthContext.Provider value={{authenticatedUser, setAuthenticatedUser}}>
      {children}
    </AuthContext.Provider>
  );
}
