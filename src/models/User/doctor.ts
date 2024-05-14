import { User } from "./user";

export interface Doctor {
    user: User,
    id: string,
    userId: string,
    educationInformation?: string,
}