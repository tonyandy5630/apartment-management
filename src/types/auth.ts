import { STAFF, MANAGER } from '@/constant/auth'

export type User = {
    username: string
    fullname: string
    password: string
    email: string
    token: string
    role: Role
}

export type Role = typeof STAFF | typeof MANAGER
