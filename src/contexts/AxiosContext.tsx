import React, {createContext, useContext} from 'react';
import axios from 'axios';
import {AuthContext} from './AuthContext';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import {config} from '../config';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AxiosContextProps {
  authAxios: any;
  publicAxios: any;
}

const AxiosContext = createContext<AxiosContextProps>({} as AxiosContextProps);
const {Provider} = AxiosContext;

const AxiosProvider = ({children}: any) => {
  const authContext = useContext(AuthContext);

  const authAxios = axios.create({
    baseURL: `${config.apiUrl}`,
  });

  const publicAxios = axios.create({
    baseURL: `${config.apiUrl}`,
  });

  authAxios.interceptors.request.use(
    config => {
      if (!config.headers.Authorization) {
        config.headers.Authorization = `Bearer ${authContext.getAccessToken()}`;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  const refreshAuthLogic = (failedRequest: any) => {
    const data = {
      refresh_token: authContext.authState.refresh_token,
    };

    const options = {
      method: 'POST',
      data,
      url: `${config.apiUrl}/auth/refresh`,
    };

    return axios(options)
      .then(async tokenRefreshResponse => {
        console.log('REFRESH');

        failedRequest.response.config.headers.Authorization =
          'Bearer ' + tokenRefreshResponse.data.access_token;

        authContext.setAuthState({
          ...authContext.authState,
          access_token: tokenRefreshResponse.data.access_token,
        });

        // await Keychain.setGenericPassword(
        //   'token',
        //   JSON.stringify({
        //     accessToken: tokenRefreshResponse.data.accessToken,
        //     refreshToken: authContext.authState.refreshToken,
        //   }),
        // );

        await AsyncStorage.setItem(
          'token',
          JSON.stringify({
            access_token: tokenRefreshResponse.data.access_token,
            refresh_token: authContext.authState.refresh_token,
          }),
        );

        return Promise.resolve();
      })
      .catch(e => {
        authContext.setAuthState({
          access_token: null,
          refresh_token: null,
          authenticated: null,
        });
      });
  };

  createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});

  return (
    <Provider
      value={{
        authAxios,
        publicAxios,
      }}>
      {children}
    </Provider>
  );
};

export {AxiosContext, AxiosProvider};
