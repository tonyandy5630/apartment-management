import AddOnService from './add-on-services.type'

type Request = {
    id: number
    rdDetail: RequestDetail
    requestDescription?: string
}

type RequestDetail = {
    rDId: number
    apartmentName: string
    owner: string
    packageRequested: string
    packagePrice: number
    bookingDate: Date
    endDate: Date
    addOnServices?: Array<AddOnService>
    feedback?: string
    status: RequestStatus
}

export type RequestStatus = 'Pending' | 'Working' | 'Done'

export default Request
