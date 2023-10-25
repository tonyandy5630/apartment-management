import { createSlice } from '@reduxjs/toolkit'
import { loginStaff } from '../actions/authActions'
import { Staff, User } from '@/types/auth.type'
import { toast } from 'react-toastify'

const initialState: {
    user: Omit<User, 'password'> | Omit<Staff, 'password'> | undefined
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
        builder.addCase(loginStaff.pending, (state, { payload }) => {
            state.loading = true
        }),
            builder.addCase(loginStaff.fulfilled, (state, { payload }) => {
                state.loading = false
                if (payload?.success) {
                    state.success = payload?.success
                }
                console.log()
                if (payload?.data) {
                    state.user = payload?.data
                }
            }),
            builder.addCase(loginStaff.rejected, (state, { payload }) => {
                state.loading = false
                state.error = true
                toast.error('Login Error')
            })
    },
})

export default userSlice.reducer
