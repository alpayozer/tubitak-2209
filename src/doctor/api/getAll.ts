import { authHttp, http } from "../../lib/http";
import { LoginResponse } from "../../models/User/loginResponse";
import { SigninRequest } from "../../models/User/signinRequest";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PaginationDto } from "../../shared/pagination/pagination.dto";
import { Doctor } from "../../models/User/doctor";


export async function getAllDoctor(): Promise<PaginationDto<Doctor>> {
    const data = (await http.get<PaginationDto<Doctor>>('/doctor')).data;
    return data;
}