import Button from '@/components/Button'
import StaffLayout from '@/components/Layout/Staff'
import RequestDetailContainer from '@/components/RequestDetailContainer'
import RequestTitle from '@/components/RequestDetailContainer/RequestApartmentTitle'
import Request, { RequestDetail } from '@/types/request.type'
import { demoRequest, demoRequestDetail } from '@/utils/demoData'
import { Box, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

export default function RequestDetail() {
    const router = useRouter()
    const { requestId } = router.query

    const handleCreateLog = () => {
        if (demoRequestDetail.status === 'Pending') {
            router.push(`${demoRequestDetail.requestId}/create-log`)
        } else if (demoRequestDetail.status === 'Working') {
            router.push('update-log', {
                query: { logid: demoRequestDetail.requestLog?.rlId },
            })
        } else {
            router.push('view-log')
        }
    }

    return (
        <StaffLayout title="Request Detail">
            <RequestTitle
                apartmentName={demoRequestDetail.apartmentName}
                owner={demoRequestDetail.owner}
                status={demoRequestDetail.status}
            >
                <Button variant="primary" handleButtonClick={handleCreateLog}>
                    {(() => {
                        switch (demoRequestDetail.status) {
                            case 'Pending':
                                return 'Create Log'
                            case 'Working':
                                return 'Update Log'
                            case 'Done':
                                return 'View Log'
                        }
                    })()}
                </Button>
            </RequestTitle>
            <Stack
                direction="row"
                justifyContent="space-between"
                alignContent="center"
            >
                <RequestDetailContainer
                    request={demoRequest}
                    size="large"
                    isRequestDetail={true}
                />
                <RequestDetailContainer size="small" isAddOnDetail={true} />
            </Stack>
        </StaffLayout>
    )
}
