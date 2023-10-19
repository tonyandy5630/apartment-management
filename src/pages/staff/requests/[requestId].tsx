import StaffLayout from '@/components/Layout/Staff'
import { Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

export default function RequestDetail() {
    const router = useRouter()
    const { requestId } = router.query

    return (
        <StaffLayout title="Request Detail">
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography></Typography>
            </Stack>
        </StaffLayout>
    )
}
