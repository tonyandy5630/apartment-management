import AddOnService from './add-on-services.type'

type Request = {
    id: number
    rdDetail: RequestDetail
    requestDescription?: string
}

export type RequestDetail = {
    rDId: number
    requestId: number
    apartmentName: string
    requestLog?: RequestLog
    owner: string
    packageRequested: string
    packagePrice: number
    bookingDate: Date
    endDate: Date
    addOnServices?: Array<AddOnService>
    feedback?: string
    status: RequestStatus
}

export type RequestLog = {
    rlId: number
    requestId: number
    staffLog: number
    MaintainItem?: string
    image?: string
    rlDescription?: string
}

export type RequestStatus = 'Pending' | 'Working' | 'Done'

export default Request
