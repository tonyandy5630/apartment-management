import http from '@/utils/http'
import { LoginResponse, ResponseAPI } from '@/types'
import { STAFF_LOGIN_API } from '@/constant/api-url/auth'
import { User } from '@/types/auth.type'

export const staffLoginAPI = (body: { email: string; password: string }) =>
    http.post<LoginResponse<User>>(STAFF_LOGIN_API, body)
