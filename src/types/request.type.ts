import AddonService from './add-on-services'

type Request = {
    id: number
    apartmentName: string
    owner: string
    bookingDate: Date
    endDate: Date
    packageRequested: string
    feedback?: string
    addOnServiceName?: string
    status: RequestStatus
}

type RequestDetail = {
    id: number
    apartmentName: string
    owner: string
    packageRequested: string
    packagePrice: number
    bookingDate: Date
    endDate: Date
    description?: string
    addOnService: AddonService
}

export type RequestStatus = 'Pending' | 'Working' | 'Done'

export default Request
