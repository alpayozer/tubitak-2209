import { Doctor } from "./doctor";
import { Patient } from "./patient";
import { User } from "./user";

export interface AppUser {
    user: User,
    roleBaseUser: Doctor | Patient,
}