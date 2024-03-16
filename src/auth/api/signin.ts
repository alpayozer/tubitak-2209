import { authHttp, http } from "../../lib/http";
import { LoginResponse } from "../../models/User/loginResponse";
import { SigninRequest } from "../../models/User/signinRequest";
import AsyncStorage from '@react-native-async-storage/async-storage';


export async function signin(signinRequest: SigninRequest): Promise<LoginResponse> {
    const data = (await authHttp.post<LoginResponse>('/auth/signin', signinRequest)).data;
    http.defaults.headers.Authorization = `Bearer ${data.tokens.access_token}`
    await AsyncStorage.setItem('accessToken', `Bearer ${data.tokens.access_token}`);
    await AsyncStorage.setItem('user', JSON.stringify(data.user));

    return data;
}