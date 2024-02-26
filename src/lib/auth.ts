import axios from 'axios';

import { config } from '../config';
import { LoginResponse } from '../models/User/loginResponse';

export const refresh = async () => {
    const data = (
        await axios.post<LoginResponse>('/auth/refresh', null, {
            baseURL: config.apiUrl,
            withCredentials: true,
        })
    ).data;

    return data;
};