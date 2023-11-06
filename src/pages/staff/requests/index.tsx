import '@/styles/request-management.scss'
import StaffLayout from '@/components/Layout/Staff'
import { Stack, Typography } from '@mui/material'
import FilterIcon from '@mui/icons-material/FilterAlt'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import requestFilterSchema, {
    RequestFilterSchemaType,
} from '@/utils/schemas/requestFilterSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import Table from '@/components/Table'
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form'
import FormSelect from '@/components/FormInput/Select'
import MyDatePicker from '@/components/FormInput/DatePicker'
import FormInput from '@/components/FormInput'
import {
    GridActionsCellItem,
    GridColDef,
    GridEventListener,
    GridRowEditStopReasons,
    GridRowId,
    GridRowModel,
    GridRowModes,
    GridRowModesModel,
    GridRowsProp,
} from '@mui/x-data-grid'
import { RequestStatus, RequestStatusID } from '@/types/request-status.type'
import { DateToString } from '@/utils/dayjs'
import { useRouter } from 'next/router'
import { APARTMENT_TYPE, STATUS_iTEM, demoRows } from '@/utils/demoData'
import SaveIcon from '@mui/icons-material/Save'
import ClearIcon from '@mui/icons-material/Clear'
import EditIcon from '@mui/icons-material/Edit'
import InfoIcon from '@mui/icons-material/Info'
import { getRequests } from '@/apis/request.api'
import { useQuery } from '@tanstack/react-query'
import Head from 'next/head'

export function createData(
    id: number,
    apartmentId: number,
    packageRequestedId: number,
    ownerId: number,
    description: string | undefined,
    apartmentName: string,
    owner: string,
    bookingDate: Date,
    endDate: Date | undefined,
    packageRequested: string | undefined,
    status: RequestStatus,
    numberOfAddOnServices: number | undefined
) {
    const formatBookingDate = DateToString(bookingDate)
    const formatEndDate = DateToString(endDate)
    return {
        id,
        apartmentName,
        apartmentId,
        ownerId,
        description,
        packageRequestedId,
        owner,
        bookingDate: formatBookingDate,
        endDate: formatEndDate,
        packageRequested,
        numberOfAddOnServices,
        status,
        isNew: false,
    }
}

export default function RequestManagementPage() {
    const router = useRouter()
    const [isError, setIsError] = useState(false)

    const [rows, setRows] = React.useState(demoRows)
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
        {}
    )

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
    const requests = useQuery({
        queryKey: ['get-requests'],
        queryFn: getRequests,
        retry: 3,
        enabled: !isError,
    })

    useEffect(() => {
        if (requests.status === 'success') {
            const request = requests.data.data
            const { data: list } = request
            if (list) {
                const newRows: GridRowsProp = list.map((item) =>
                    createData(
                        item.requestId,
                        item.apartmentId,
                        item.packageRequestedId,
                        item.ownerId,
                        item.description,
                        item.apartmentName,
                        item.owner,
                        item.bookDateTime,
                        item.endDateTime,
                        item.packageName,
                        item.reqStatus,
                        item.numberOfAddOns
                    )
                )
                setRows(Array.from(newRows) as any[])
            } else {
                setRows([])
            }
        }
        if (requests.status === 'error') {
            setIsError(true)
        }
    }, [requests.status])
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
        { field: 'id', headerName: 'ID', width: 70, hideable: true },
        { field: 'apartmentName', headerName: 'Apartment Name', width: 220 },
        {
            field: 'owner',
            headerName: 'Owner',
            width: 200,
        },
        { field: 'bookingDate', headerName: 'Book date', width: 100 },
        { field: 'endDate', headerName: 'End date', width: 100 },

        {
            field: 'packageRequested',
            headerName: 'Package Request',
            width: 200,
        },
        {
            field: 'numberOfAddOnServices',
            headerName: 'Add-on Services',
            width: 130,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 90,
            editable: true,
            type: 'singleSelect',
            valueOptions: ['Working', 'Pending', 'Done'],
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id, row }) => {
                const isInEditMode =
                    rowModesModel[id]?.mode === GridRowModes.Edit

                if (isInEditMode) {
                    return [
                        <GridActionsCellItem
                            key="edit-cell"
                            icon={<SaveIcon />}
                            label="Save"
                            sx={{
                                color: 'primary.main',
                            }}
                            onClick={handleSaveClick(id)}
                        />,
                        <GridActionsCellItem
                            key="clear"
                            icon={<ClearIcon />}
                            label="Cancel"
                            className="textPrimary"
                            onClick={handleCancelClick(row)}
                            color="inherit"
                        />,
                    ]
                }

                return [
                    <GridActionsCellItem
                        key="edit"
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        key="detail"
                        icon={<InfoIcon />}
                        label="Details"
                        className="textPrimary"
                        onClick={handleDetailClick(row)}
                        color="inherit"
                    />,
                ]
            },
        },
    ]

    const handleEditClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.Edit },
        })
    }

    const handleDetailClick = (row: any) => () => {
        router.push(`/staff/requests/${row.id}`)

        // if ((row.status as RequestStatus) === 'Pending') {
        //     router.push(`/staff/requests/${row.id}`)
        // } else if ((row.status as RequestStatus) === 'Working') {
        //     router.push(`/staff/requests/${row.id}/update-log/${row.id}`)
        // }
    }

    const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
        setRowModesModel(newRowModesModel)
    }

    const processRowUpdate = (newRow: GridRowModel) => {
        const updatedRow = { ...newRow, isNew: false }
        setRows(
            demoRows.map((row) => (row.id === newRow.id ? updatedRow : row))
        )
        return updatedRow
    }

    const handleSaveClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View },
        })
    }

    const handleRowEditStop: GridEventListener<'rowEditStop'> = (
        params,
        event
    ) => {
        if (params.reason === GridRowEditStopReasons.rowFocusOut) {
            event.defaultMuiPrevented = true
        }
    }

    const handleCancelClick = (id: GridRowId) => () => {
        setRowModesModel({
            ...rowModesModel,
            [id]: { mode: GridRowModes.View, ignoreModifications: true },
        })

        const editedRow = rows.find((row) => row.id === id)
        if (editedRow!.isNew) {
            setRows(rows.filter((row) => row.id !== id))
        }
    }

    return (
        <>
            <Head>
                <title>Staff Requests</title>
            </Head>
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
                                <FormSelect
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
                                <FormSelect
                                    id="filter-apartment-type"
                                    label="Apartment Type"
                                    control={control}
                                    register={register}
                                    name="apartment-type"
                                    formClassName="w-44"
                                    items={APARTMENT_TYPE}
                                    onChange={() =>
                                        submitButton.current.click()
                                    }
                                />
                            </Stack>
                            <FormInput
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
                <Table
                    editMode="row"
                    rows={rows}
                    columns={columns}
                    rowModesModel={rowModesModel}
                    handleRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    handleRowModesModelChange={handleRowModesModelChange}
                />
            </StaffLayout>
        </>
    )
}
