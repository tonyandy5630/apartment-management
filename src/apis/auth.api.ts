import http from '@/utils/http'
import { ResponseAPI } from '@/types'
import { loginAPI_URL } from '@/constant/api-url/auth'
import { User } from '@/types/auth'

export const loginAPI = (body: { username: string; password: string }) =>
    http.post<ResponseAPI<User>>(loginAPI_URL, body)
