import { STAFF, MANAGER } from '@/constant/auth.constant'
import { LoginResponse, ResponseAPI, SuccessResponse } from '.'
import StaffAuth from './staff.type'

export type User = {
    name: string
    password: string
    email: string
    phone: string
    role: Role
}

export type AuthResponse = LoginResponse<{
    user: StaffAuth | User
    token: string
    success: boolean
}>

export type Role = typeof STAFF.id | typeof MANAGER.id
