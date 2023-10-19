import Button from '@/components/Button'
import StaffLayout from '@/components/Layout/Staff'
import RequestDetailContainer from '@/components/RequestDetailContainer'
import Request, { RequestDetail } from '@/types/request.type'
import { DateToString } from '@/utils/dayjs'
import getRequestStatusColor from '@/utils/getColor'
import RequestStatusIcon from '@/utils/getIcons'
import { Box, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'

const demoRequestDetail: RequestDetail = {
    rDId: 1,
    requestId: 1,
    apartmentName: 'Riverside Apartment',
    bookingDate: new Date(),
    endDate: new Date(),
    owner: 'Bui Thanh Tu',
    packagePrice: 300,
    packageRequested: 'Cleaning Package',
    status: 'Pending',
    addOnServices: [],
    feedback: 'Good work',
}

const demoRequest: Request = {
    id: 1,
    rdDetail: demoRequestDetail,
    requestDescription: 'Test',
}

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
            <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                className="w-[48rem] mb-5"
            >
                <Box sx={{ width: '47%', height: '100%' }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        width="100%"
                    >
                        <Typography
                            variant="h5"
                            className="inline-block"
                            fontWeight="500"
                        >
                            {demoRequestDetail.apartmentName}
                        </Typography>
                        <Box>
                            <Typography
                                fontSize="15px"
                                className="w-fit inline-block mr-1"
                                color={getRequestStatusColor(
                                    demoRequestDetail.status
                                )}
                            >
                                {demoRequestDetail.status}
                            </Typography>
                            <RequestStatusIcon
                                status={demoRequestDetail.status}
                                size="small"
                                color={getRequestStatusColor(
                                    demoRequestDetail.status
                                )}
                            />
                        </Box>
                    </Stack>
                    <Typography fontSize="15px">
                        {demoRequestDetail.owner}
                    </Typography>
                </Box>
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
            </Stack>
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
