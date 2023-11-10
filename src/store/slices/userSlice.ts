import { createSlice } from '@reduxjs/toolkit'
import { loginStaff, renewTokenAndUser } from '../actions/authActions'
import { User } from '@/types/auth.type'
import { toast } from 'react-toastify'
import { StaffBase } from '@/types/staff.type'

const initialState: {
    user?: Omit<User, 'password'> | StaffBase
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
        //* Staff Login
        builder.addCase(loginStaff.pending, (state, { payload }) => {
            state.loading = true
        }),
            builder.addCase(loginStaff.fulfilled, (state, { payload }) => {
                state.loading = false
                if (payload?.success) {
                    state.success = payload?.success
                    if (payload?.data) {
                        state.user = payload?.data
                    }
                }
            }),
            builder.addCase(loginStaff.rejected, (state, { payload }) => {
                state.loading = false
                state.error = true
            }),
            //* Renew Token
            builder.addCase(renewTokenAndUser.pending, (state, { payload }) => {
                state.loading = true
            }),
            builder.addCase(
                renewTokenAndUser.fulfilled,
                (state, { payload }) => {
                    state.loading = false
                    if (payload?.success) {
                        state.success = payload?.success
                        if (payload?.data) state.user = payload?.data
                    }
                }
            ),
            builder.addCase(
                renewTokenAndUser.rejected,
                (state, { payload }) => {
                    state.loading = false
                    state.error = true
                }
            )
    },
})

export default userSlice.reducer
