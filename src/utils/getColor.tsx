import { RequestStatusColors } from '@/constant/colors.constant'
import { REQUEST_STATUS } from '@/constant/request.constant'
import { RequestStatus } from '@/types/request-status.type'

const getRequestStatusColor = (status: RequestStatus) => {
    switch (status) {
        case 'Pending'.toUpperCase():
            return RequestStatusColors.pending
        case 'Working'.toUpperCase():
            return RequestStatusColors.working
        case REQUEST_STATUS.Processing.status.toUpperCase():
            return RequestStatusColors.working
        default:
            return RequestStatusColors.done
    }
}

export default getRequestStatusColor
