import { getRequestDetail } from '@/apis/request-detail.api'
import Button from '@/components/Button'
import StaffLayout from '@/components/Layout/Staff'
import RequestDetailContainer from '@/components/RequestDetailContainer'
import RequestTitle from '@/components/RequestDetailContainer/RequestApartmentTitle'
import { MANAGER, STAFF } from '@/constant/auth.constant'
import { REQUEST_STATUS } from '@/constant/request.constant'
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

    const detail = useQuery({
        queryKey: ['get-request-detail', requestId],
        queryFn: () => getRequestDetail(requestId as string),
        retry: 2,
        enabled: requestId !== undefined,
    })

    const handlePrimaryActionClick = () => {
        const isManager = user?.role === MANAGER.id
        const isPending =
            requestDetail?.reqStatus ===
            REQUEST_STATUS.Pending.status.toUpperCase()
        console.log()
        if (isManager && isPending) {
            router.push(`${requestDetail.requestId}/assign-staff`)
        }
    }

    const handleCreateLog = () => {
        if (demoRequestDetail.reqStatus === 'Pending') {
            router.push(`${demoRequestDetail.requestId}/create-log`)
        } else if (demoRequestDetail.reqStatus === 'Working') {
            // router.push('update-log', {
            //     query: { logid: demoRequestDetail.requestLog?.rlId },
            // })
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
                    apartmentName={
                        requestDetail?.apartmentName ??
                        demoRequestDetail.apartmentName
                    }
                    owner={requestDetail?.owner}
                    status={requestDetail?.reqStatus}
                >
                    {user?.role === STAFF.id ? (
                        <Button
                            variant="primary"
                            handleButtonClick={handleCreateLog}
                        >
                            {(() => {
                                switch (requestDetail?.reqStatus) {
                                    case 'Pending'.toUpperCase():
                                        return 'Create Log'
                                    case 'Working'.toUpperCase():
                                        return 'Update Log'
                                    case 'Done'.toUpperCase():
                                        return 'View Log'
                                }
                            })()}
                        </Button>
                    ) : (
                        <Button
                            variant="primary"
                            handleButtonClick={handlePrimaryActionClick}
                        >
                            {requestDetail?.reqStatus.toLowerCase() ===
                            REQUEST_STATUS.Pending.status.toLowerCase()
                                ? 'Assign Staff'
                                : 'View Logs'}
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
