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

export type RequestStatus = 'Pending' | 'Working' | 'Done'

export default Request
