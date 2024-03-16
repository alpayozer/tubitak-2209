import { authHttp, http } from "../../lib/http";
import { LoginResponse } from "../../models/User/loginResponse";
import { SignupRequest } from "../../models/User/signupRequest";

export async function signup(signupRequest: SignupRequest): Promise<LoginResponse> {
    const data = (await authHttp.post<LoginResponse>('/auth/signup', signupRequest)).data;
    http.defaults.headers.Authorization = `Bearer ${data.tokens.access_token}`
    return data;
}