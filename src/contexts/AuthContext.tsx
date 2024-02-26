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

  async function refreshAuth() {
    try {
      const data = await refresh();
      setAuthenticatedUser(data.user);

      http.defaults.headers.Authorization = `Bearer ${data.tokens.refreshToken}`;
    } catch (error) {
    } finally {
      setLoaded(true);
    }
  }

  useEffect(() => {
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
