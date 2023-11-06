import AddOnService from './add-on-services.type'
import { RequestStatus, RequestStatusID } from './request-status.type'

type Request = {
    requestId: number
    apartmentId: number
    packageRequestedId: number
    packageName: string
    apartmentName: string
    packagePrice: number | string
    ownerId: number
    owner: string
    description?: string
    bookDateTime: Date
    endDateTime?: Date
    numberOfAddOns?: number
    reqStatus: RequestStatus
}

export default Request
