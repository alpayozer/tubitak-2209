import axios from 'axios';

import { LoginResponse } from '../models/User/loginResponse';
import { config } from '../config';

export const http = axios.create({
    baseURL: config.apiUrl,
    withCredentials: true,
});

export const authHttp = axios.create({
    baseURL: config.apiUrl,
    withCredentials: true,
});

const refresh = async () => {
    return (await authHttp.post<LoginResponse>('/auth/refresh')).data;
};

http.interceptors.response.use(
    (response) => response,
    async function (error) {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                const { tokens } = await refresh();
                error.response.config.headers.Authorization = `Bearer ${tokens.accessToken}`;
                return http(error.response.config);
            } catch (error) {
                // window.location.href = '/login';
                return Promise.reject(error);
            }
        }
        return Promise.reject(error);
    },
);