import { Role } from './auth.type'

export type StaffBase = {
    id: number
    name: string
    email: string
    phone: string
    code: string
    staffStatus: string
    address?: string
    role: Role
}

interface StaffAuth extends StaffBase {
    password: string
}

export interface StaffView extends StaffBase {
    numberOfRequestWorking?: number
}

export default StaffAuth
