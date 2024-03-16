import { User } from "./user";

export interface Tokens {
    access_token: string;
    refresh_token: string;
}
export interface LoginResponse {
    user: User;
    tokens: Tokens;
}