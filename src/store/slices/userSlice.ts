import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from '../actions/authActions'
import { User } from '@/types/auth'
import { toast } from 'react-toastify'

const initialState: {
    user: Omit<User, 'password'> | undefined
    loading: boolean
    error?: boolean
    success: boolean
} = {
    user: undefined,
    loading: false,
    error: undefined,
    success: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.pending, (state, { payload }) => {
            state.loading = true
        }),
            builder.addCase(loginUser.fulfilled, (state, { payload }) => {
                state.loading = false
                state.success = true
                if (payload?.data) {
                    const token = payload?.data?.token
                    localStorage.setItem('userToken', token)
                    state.user = payload?.data
                }
            }),
            builder.addCase(loginUser.rejected, (state, { payload }) => {
                state.loading = false
                state.error = true
                toast.error('Login Error')
            })
    },
})

export default userSlice.reducer
