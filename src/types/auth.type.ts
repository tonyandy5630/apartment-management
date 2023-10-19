import { STAFF, MANAGER } from '@/constant/auth'
import { ResponseAPI, SuccessResponse } from '.'

export type User = {
    username: string
    fullname: string
    password: string
    email: string
    token: string
    role: Role
}

export type AuthResponse = SuccessResponse<{
    access_token: string
    user: User
}>

export type Role = typeof STAFF | typeof MANAGER
