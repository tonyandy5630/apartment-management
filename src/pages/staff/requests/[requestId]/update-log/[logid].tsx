import StaffLayout from '@/components/Layout/Staff'
import RequestTitle from '@/components/RequestDetailContainer/RequestApartmentTitle'
import { useRouter } from 'next/router'
import React from 'react'

export default function UpdateLog() {
    const router = useRouter()

    const { logid } = router.query
    return (
        <StaffLayout title="Update Request Log">
            {/* <RequestTitle   /> */}
        </StaffLayout>
    )
}
