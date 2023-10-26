import { createData } from '@/pages/staff/requests'
import { MenuItemType } from '@/types/auth-component.type'
import Request, { RequestDetail } from '@/types/request.type'
import { GridRowProps, GridRowsProp } from '@mui/x-data-grid'
import dayjs from 'dayjs'

export const demoRequestDetail: RequestDetail = {
    rDId: 1,
    requestId: 1,
    apartmentName: 'Riverside Apartment',
    bookDateTime: new Date(),
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

const initialRows: GridRowsProp = [
    {
        id: 1,
        apartmentName: 'RiverSide Apartment',
        owner: 'Bui Thanh Tu',
        bookingDate: dayjs(new Date()).format('DD/MM/YYYY'),
        endDate: dayjs(new Date()).format('DD/MM/YYYY'),
        packageRequested: 'Cleaning Services',
        numberOfAddOnServices: 0,
        status: 'Pending',
    },
    {
        id: 2,
        apartmentName: 'RiverSide Apartment',
        owner: 'Nguyen Thi Hang Nga',
        bookingDate: dayjs(new Date()).format('DD/MM/YYYY'),
        endDate: dayjs(new Date()).format('DD/MM/YYYY'),
        packageRequested: 'Cleaning Services',
        numberOfAddOnServices: 0,
        status: 'Pending',
    },
    {
        id: 3,
        apartmentName: 'GoldenRiver Apartment',
        owner: 'Bui Thanh Tu',
        bookingDate: dayjs(new Date()).format('DD/MM/YYYY'),
        endDate: dayjs(new Date()).format('DD/MM/YYYY'),
        packageRequested: 'Cleaning Services',
        numberOfAddOnServices: 0,
        status: 'Working',
    },
]

export const demoTask: MenuItemType[] = [
    {
        value: '1',
        name: 'Cleaning Package',
    },
    {
        value: '2',
        name: 'Superman Package',
    },
]

export const demoRows: any[] = Array.from(initialRows)
