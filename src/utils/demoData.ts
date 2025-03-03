import { STAFF } from '@/constant/auth.constant'
import { REQUEST_STATUS } from '@/constant/request.constant'
import { createData } from '@/pages/staff/requests'
import { MenuItemType } from '@/types/form-component.type'
import RequestDetail from '@/types/request-detail.type'
import Request from '@/types/request.type'
import StaffAuth, { StaffView } from '@/types/staff.type'
import { GridRowProps, GridRowsProp } from '@mui/x-data-grid'
import dayjs from 'dayjs'

export const demoRequestDetail: RequestDetail = {
    requestId: 1,
    apartmentName: 'Riverside Apartment',
    bookDateTime: new Date(),
    endDateTime: new Date(),
    owner: 'Bui Thanh Tu',
    packagePrice: 300,
    packageName: 'Cleaning Package',
    reqStatus: REQUEST_STATUS.Pending.status,
    addOnList: [],
    apartmentId: 1,
    ownerId: 3,
    packageRequestedId: 3,
}

export const demoStaffs: Array<StaffView> = [
    {
        id: 1,
        code: 'ST1',
        address: '123 Wall Street, NYC',
        email: 'tonyandy789@email.com',
        phone: '0769640460',
        role: STAFF.id,
        numberOfRequestWorking: 1,
        name: 'Bui Thanh Tu',
        status: 1,
    },
    {
        id: 2,
        code: 'ST2',
        address: '124 Heisenberg Street, California',
        email: 'tonyandy789@email.com',
        phone: '0769640460',
        role: STAFF.id,
        numberOfRequestWorking: 2,
        name: 'Truong Dinh Thanh',
        status: 1,
    },
    {
        id: 3,
        code: 'ST3',
        address: '124 Vo Van Ngan, Ho Chi Minh',
        email: 'tonyandy789@email.com',
        phone: '0769640460',
        role: STAFF.id,
        numberOfRequestWorking: 3,
        name: 'Nguyen Dinh Thanh',
        status: 1,
    },
]

export const demoRequest: Request = {
    requestId: 1,
    apartmentName: 'Riverside Apartment',
    bookDateTime: new Date(),
    endDateTime: new Date(),
    owner: 'Bui Thanh Tu',
    packagePrice: 300,
    packageName: 'Cleaning Package',
    reqStatus: REQUEST_STATUS.Pending.status,
    apartmentId: 1,
    ownerId: 3,
    packageRequestedId: 3,
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
