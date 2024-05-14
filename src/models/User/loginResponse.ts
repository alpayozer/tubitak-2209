import { AppUser } from "./appUser";

export interface Tokens {
    access_token: string;
    refresh_token: string;
}
export interface LoginResponse {
    user: AppUser;
    tokens: Tokens;
}