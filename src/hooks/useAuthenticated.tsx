import { renewTokenAndUserAPI } from '@/apis/auth.api'
import { useAppDispatch, useAppSelector } from '@/store'
import { renewTokenAndUser } from '@/store/actions/authActions'
import { getAccessTokenFromLS } from '@/utils/auth'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

const useAuthenticated = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.userAuthenticate.user)
    const loading = useAppSelector((state) => state.userAuthenticate.loading)
    const router = useRouter()

    const getRenewTokenUser = async () => {
        const request = await dispatch(renewTokenAndUser())
        if (request.meta.requestStatus === 'rejected') {
            router.push('/staff/login')
        }
    }

    if (!user) {
        getRenewTokenUser()
    }

    return {
        loading,
        role: user?.role ?? -1,
    }
}

export default useAuthenticated
