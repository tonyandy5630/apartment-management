import { STAFF, MANAGER } from '@/constant/auth'
import { LoginResponse, ResponseAPI, SuccessResponse } from '.'

export type User = {
    name: string
    password: string
    email: string
    phone: string
    role: Role
}

export type Staff = {
    id: number
    name: string
    password: string
    email: string
    phone: string
    code: string
    staffStatus: string
    address: string
    role: Role
}

export type AuthResponse = LoginResponse<{
    user: Staff | User
    token: string
    success: boolean
}>

export type Role = typeof STAFF.id | typeof MANAGER.id
