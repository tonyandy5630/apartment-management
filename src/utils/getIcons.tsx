import React from 'react'
import { RequestStatus } from '@/types/request-status.type'
import WorkingIcon from '@mui/icons-material/Engineering'
import PendingIcon from '@mui/icons-material/QueryBuilderOutlined'
import DoneIcon from '@mui/icons-material/DoneOutlined'
import { REQUEST_STATUS } from '@/constant/request.constant'

type Props = {
    status: RequestStatus
    size?: 'small' | 'inherit' | 'large'
    color?: string
}

const RequestStatusIcon = ({ status, size, color }: Props) => {
    switch (status) {
        case 'Pending'.toUpperCase():
            return <PendingIcon fontSize={size} sx={{ color }} />
        case 'Working'.toUpperCase():
            return <WorkingIcon fontSize={size} sx={{ color }} />
        case REQUEST_STATUS.Processing.status.toUpperCase():
            return <WorkingIcon fontSize={size} sx={{ color }} />
        default:
            return <DoneIcon fontSize={size} sx={{ color }} />
    }
}

export default RequestStatusIcon
