import { createData } from '@/pages/staff/requests'
import { MenuItemType } from '@/types/auth-component.type'
import Request, { RequestDetail } from '@/types/request.type'

export const demoRequestDetail: RequestDetail = {
    rDId: 1,
    requestId: 1,
    apartmentName: 'Riverside Apartment',
    bookingDate: new Date(),
    endDate: new Date(),
    owner: 'Bui Thanh Tu',
    packagePrice: 300,
    packageRequested: 'Cleaning Package',
    status: 'Pending',
    addOnServices: [],
    feedback: 'Good work',
}

export const demoRequest: Request = {
    id: 1,
    rdDetail: demoRequestDetail,
    requestDescription: 'Test',
}

export const STATUS_iTEM: Array<MenuItemType> = [
    {
        name: 'Pending',
        value: '0',
    },
    {
        name: 'Working',
        value: '1',
    },
]

export const APARTMENT_TYPE: Array<MenuItemType> = [
    {
        name: '1PN, 2NVS',
        value: '0',
    },
    {
        name: '2PN, 2NVS',
        value: '1',
    },
]

export const demoRows = [
    createData(
        1,
        'Riverside Apartment',
        'Bui Thanh Tu',
        new Date(),
        new Date(),
        'Cleaning Services',
        'Pending'
    ),
    createData(
        2,
        'Riverside Apartment',
        'Bui Thanh Tu',
        new Date(),
        new Date(),
        'Cleaning Services',
        'Working'
    ),
    createData(
        3,
        'Riverside Apartment',
        'Nguyen Thi Hang Nga',
        new Date(),
        new Date(),
        'Cleaning Services',
        'Pending'
    ),
]
