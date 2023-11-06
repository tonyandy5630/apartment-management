import { getRequestDetail } from '@/apis/request-detail.api'
import Button from '@/components/Button'
import StaffLayout from '@/components/Layout/Staff'
import RequestDetailContainer from '@/components/RequestDetailContainer'
import RequestTitle from '@/components/RequestDetailContainer/RequestApartmentTitle'
import { MANAGER, STAFF } from '@/constant/auth.constant'
import { useAppDispatch, useAppSelector } from '@/store'
import AddOnService from '@/types/add-on-services.type'
import RequestDetail from '@/types/request-detail.type'
import { demoRequestDetail } from '@/utils/demoData'
import { Stack } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function RequestDetail() {
    const [requestDetail, setRequestDetail] = useState<
        RequestDetail | undefined
    >()
    const [addOnServiceList, setAddOnServiceList] = useState<
        Array<AddOnService> | undefined
    >([])
    const router = useRouter()
    const { requestId } = router.query
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.userAuthenticate.user)
    const handleAssignStaff = () => {}
    const detail = useQuery({
        queryKey: ['get-request-detail', requestId],
        queryFn: () => getRequestDetail(requestId as string),
        retry: 2,
        enabled: requestId !== undefined,
    })

    const handleCreateLog = () => {
        if (demoRequestDetail.status === 'Pending') {
            router.push(`${demoRequestDetail.requestID}/create-log`)
        } else if (demoRequestDetail.status === 'Working') {
            router.push('update-log', {
                query: { logid: demoRequestDetail.requestLog?.rlId },
            })
        } else {
            router.push('view-log')
        }
    }

    useEffect(() => {
        if (detail.status === 'success') {
            const rqDetail = detail.data.data.data
            if (rqDetail) {
                setRequestDetail(rqDetail)
                setAddOnServiceList(rqDetail.addOnList)
            }
        }
    }, [detail.status])

    return (
        <>
            <Head>
                <title>Request Detail</title>
            </Head>
            <StaffLayout title="Request Detail">
                <RequestTitle
                    apartmentName={demoRequestDetail.apartmentName}
                    owner={demoRequestDetail.owner}
                    status={demoRequestDetail.status}
                >
                    {user?.role === STAFF.id ? (
                        <Button
                            variant="primary"
                            handleButtonClick={handleCreateLog}
                        >
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
                    ) : (
                        <Button
                            variant="primary"
                            handleButtonClick={handleAssignStaff}
                        >
                            Assign
                        </Button>
                    )}
                </RequestTitle>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignContent="center"
                >
                    <RequestDetailContainer
                        request={requestDetail}
                        size="large"
                        isRequestDetail={true}
                        isLoading={detail.isLoading}
                    />
                    <RequestDetailContainer
                        size="small"
                        isAddOnDetail={true}
                        addOnServices={addOnServiceList}
                        isLoading={detail.isLoading}
                    />
                </Stack>
            </StaffLayout>
        </>
    )
}
