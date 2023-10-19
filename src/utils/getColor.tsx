import { RequestStatusColors } from '@/constant/colors'
import { RequestStatus } from '@/types/request.type'

const getRequestStatusColor = (status: RequestStatus) => {
    switch (status) {
        case 'Pending':
            return RequestStatusColors.pending
        case 'Working':
            return RequestStatusColors.working
        default:
            return RequestStatusColors.done
    }
}

export default getRequestStatusColor
