import { User } from "./user";

export interface Tokens {
    accessToken: string;
    refreshToken: string;
}
export interface LoginResponse {
    user: User;
    tokens: Tokens;
}