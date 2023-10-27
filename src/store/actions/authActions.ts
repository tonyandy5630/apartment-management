import { renewTokenAndUserAPI, staffLoginAPI } from '@/apis/auth.api'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { User } from '@/types/auth.type'
import { ResponseAPI } from '@/types'
import { toast } from 'react-toastify'
import { error } from 'console'

export const loginStaff = createAsyncThunk(
    'auth/login',
    async (
        user: Omit<User, 'token' | 'name' | 'role' | 'phone'>,
        { rejectWithValue }
    ) => {
        try {
            const body = {
                email: user.email.trim(),
                password: user.password.trim(),
            }
            const { data } = await staffLoginAPI(body)
            if (!data.success) {
                return rejectWithValue(data.message)
            }
            if (!data.data) {
                new Error('No user data')
            }
            return data
        } catch (e: any) {
            return rejectWithValue('Something went wrong')
        }
    }
)

export const renewTokenAndUser = createAsyncThunk(
    'auth/renew/token',
    async (_, { rejectWithValue }) => {
        try {
            const { data } = await renewTokenAndUserAPI()
            if (!data.success) {
                return rejectWithValue(data.message)
            }
            if (!data.data) {
                new Error('No user data')
            }
            return data
        } catch (e: any) {
            toast(e.message)
        }
    }
)
