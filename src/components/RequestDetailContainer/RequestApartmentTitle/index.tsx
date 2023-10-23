import { RequestStatus } from '@/types/request.type'
import getRequestStatusColor from '@/utils/getColor'
import RequestStatusIcon from '@/utils/getIcons'
import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

type Props = {
    apartmentName: string
    owner?: string
    status?: RequestStatus
    children?: React.ReactNode
}

export default function RequestTitle({
    apartmentName,
    owner,
    status,
    children,
}: Props) {
    return (
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
                        {apartmentName}
                    </Typography>
                    {status !== undefined && (
                        <Box>
                            <Typography
                                fontSize="15px"
                                className="inline-block mr-1 w-fit"
                                color={getRequestStatusColor(status)}
                            >
                                {status}
                            </Typography>
                            <RequestStatusIcon
                                status={status}
                                size="small"
                                color={getRequestStatusColor(status)}
                            />
                        </Box>
                    )}
                </Stack>
                <Typography fontSize="15px">{owner}</Typography>
            </Box>
            {children}
        </Stack>
    )
}
