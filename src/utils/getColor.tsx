import { RequestStatusColors } from '@/constant/colors.constant'
import { RequestStatus } from '@/types/request-status.type'

const getRequestStatusColor = (status: RequestStatus) => {
    switch (status) {
        case 'Pending'.toUpperCase():
            return RequestStatusColors.pending
        case 'Working'.toUpperCase():
            return RequestStatusColors.working
        default:
            return RequestStatusColors.done
    }
}

export default getRequestStatusColor
