import '@/styles/request-management.scss'
import StaffLayout from '@/components/Layout/Staff'
import { Stack, Typography } from '@mui/material'
import FilterIcon from '@mui/icons-material/FilterAlt'
import React, { useRef, useState } from 'react'
import { MenuItemType } from '@/types/auth-component'
import SearchIcon from '@mui/icons-material/Search'
import requestFilterSchema, {
    RequestFilterSchemaType,
} from '@/utils/schemas/requestFilterSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import Table from '@/components/Table'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import AuthSelect from '@/components/AuthInput/Select'
import MyDatePicker from '@/components/AuthInput/DatePicker'
import AuthInput from '@/components/AuthInput'
import {
    GridColDef,
    GridEventListener,
    GridValueGetterParams,
} from '@mui/x-data-grid'
import { RequestStatus } from '@/types/request'
import { DateToString } from '@/utils/dayjs'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'

const STATUS_iTEM: Array<MenuItemType> = [
    {
        name: 'Pending',
        value: '0',
    },
    {
        name: 'Working',
        value: '1',
    },
]

const APARTMENT_TYPE: Array<MenuItemType> = [
    {
        name: '1PN, 2NVS',
        value: '0',
    },
    {
        name: '2PN, 2NVS',
        value: '1',
    },
]

function createData(
    id: number,
    apartmentName: string,
    owner: string,
    bookingDate: Date,
    endDate: Date,
    packageRequested: string,
    status: RequestStatus,
    addOnServiceName?: string
) {
    const formatBookingDate = DateToString(bookingDate)
    const formatEndDate = DateToString(endDate)
    return {
        id,
        apartmentName,
        owner,
        bookingDate: formatBookingDate,
        endDate: formatEndDate,
        packageRequested,
        addOnServiceName,
        status,
    }
}

const demoRows = [
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
        'Pending'
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

export default function RequestManagementPage() {
    const router = useRouter()
    const myForm = useForm<RequestFilterSchemaType>({
        defaultValues: {},
        resolver: yupResolver(requestFilterSchema),
    })
    const {
        register,
        handleSubmit,
        reset,
        control,
        setError,
        getValues,
        formState: { errors },
    } = myForm
    const submitButton = useRef<any>()
    const [value, setValue] = useState()

    const onSubmit: SubmitHandler<RequestFilterSchemaType> = async (data) => {
        console.log(data)
        // const req = await dispatch(loginUser(data))
        // if (req.meta.requestStatus === 'fulfilled') {
        //     router.push('/dashboard')
        // }

        // if (req.meta.requestStatus === 'rejected') {
        //     setError('password', {
        //         type: 'Server',
        //         message: req.payload as string,
        //     })
        //     setError('username', {
        //         type: 'Server',
        //         message: req.payload as string,
        //     })
        //     reset(
        //         {
        //             username: '',
        //             password: '',
        //         },
        //         {
        //             keepErrors: true,
        //         }
        //     )
        // }
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'apartmentName', headerName: 'Apartment Name', width: 250 },
        {
            field: 'owner',
            headerName: 'Owner',
            width: 200,
        },
        { field: 'bookingDate', headerName: 'Booking date', width: 170 },
        { field: 'endDate', headerName: 'End date', width: 170 },

        {
            field: 'packageRequested',
            headerName: 'Package Request',
            width: 200,
        },
        { field: 'addOnServiceName', headerName: 'Add-on Service', width: 200 },
        { field: 'status', headerName: 'Status', width: 90 },
    ]

    return (
        <StaffLayout title="Request Management">
            <FormProvider {...myForm}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack
                        direction="row"
                        sx={{ py: '25px' }}
                        alignItems="center"
                        justifyContent="space-between"
                        gap={5}
                        className="w-full h-fit"
                    >
                        <Stack
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            className="w-fit h-fit"
                            gap={2}
                        >
                            <Typography
                                fontSize="23px"
                                textAlign="center"
                                marginRight="20px"
                            >
                                Filter
                                <FilterIcon />
                            </Typography>
                            <AuthSelect
                                control={control}
                                register={register}
                                name="status"
                                id="filter-status"
                                label="Status"
                                items={STATUS_iTEM}
                                onChange={() => {
                                    submitButton.current.click()
                                }}
                            />
                            <MyDatePicker
                                name="bookDate"
                                label="Book Date"
                                control={control}
                                maxDate={getValues('endDate')}
                                handleChange={() =>
                                    submitButton.current.click()
                                }
                            />

                            <MyDatePicker
                                name="endDate"
                                label="End Date"
                                minDate={getValues('bookDate')}
                                handleChange={() =>
                                    submitButton.current.click()
                                }
                            />
                            <AuthSelect
                                id="filter-apartment-type"
                                label="Apartment Type"
                                control={control}
                                register={register}
                                name="apartment-type"
                                formClassName="w-44"
                                items={APARTMENT_TYPE}
                                onChange={() => submitButton.current.click()}
                            />
                        </Stack>
                        <AuthInput
                            control={control}
                            register={register}
                            name={'search-string'}
                            label="Search"
                            startAdornment={<SearchIcon />}
                            id="search-input"
                            placeholder="Search"
                            className="self-center h-full bg-transparent w-72"
                            inputClassName="h-full"
                        />
                    </Stack>
                    <button type="submit" hidden={true} ref={submitButton}>
                        Submit
                    </button>
                </form>
            </FormProvider>
            <Table rows={demoRows} columns={columns} />
        </StaffLayout>
    )
}
