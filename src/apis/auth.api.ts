import http from '@/utils/http'
import { LoginResponse, ResponseAPI } from '@/types'
import { RENEW_TOKEN_USER, STAFF_LOGIN_API } from '@/constant/api-url/auth'
import { User } from '@/types/auth.type'
import StaffAuth from '@/types/staff.type'

export const staffLoginAPI = (body: { email: string; password: string }) =>
    http.post<LoginResponse<User>>(STAFF_LOGIN_API, body)

export const renewTokenAndUserAPI = () =>
    http.get<LoginResponse<StaffAuth>>(RENEW_TOKEN_USER)
