import { STAFF, MANAGER } from '@/constant/auth'
import { ResponseAPI, SuccessResponse } from '.'

export type User = {
    name: string
    password: string
    email: string
    token: string
    phone: string
    role: Role
}

export type AuthResponse = SuccessResponse<{
    access_token: string
    user: User
}>

export type Role = typeof STAFF.id | typeof MANAGER.id
