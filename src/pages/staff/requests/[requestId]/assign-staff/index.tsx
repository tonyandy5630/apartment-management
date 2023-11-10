import StaffLayout from '@/components/Layout/Staff'
import { demoStaffs } from '@/utils/demoData'
import { Stack, Typography } from '@mui/material'
import {
    GridActionsCellItem,
    GridColDef,
    GridRowId,
    GridRowModes,
    GridRowModesModel,
} from '@mui/x-data-grid'
import React, { useEffect, useRef } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import FilterIcon from '@mui/icons-material/FilterAlt'
import SearchIcon from '@mui/icons-material/Search'
import { MenuItemType } from '@/types/form-component.type'
import FormSelect from '@/components/FormInput/Select'
import FormInput from '@/components/FormInput'
import AssignIcon from '@mui/icons-material/AssignmentInd'
import Table from '@/components/Table'
import { yupResolver } from '@hookform/resolvers/yup'
import AssignStaffFilterSchema, {
    AssignStaffFilterSchemaType,
} from '@/utils/schemas/assignStaffFilterSchema'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getStaffOnly } from '@/apis/staff.api'
import { StaffView } from '@/types/staff.type'
import { useRouter } from 'next/router'
import { assignStaffToRequest } from '@/apis/request.api'
import { toast } from 'react-toastify'
import { notFound } from 'next/navigation'

const NUMBER_OF_REQUESTS: Array<MenuItemType> = [
    {
        name: 'Ascending',
        value: 'asc',
    },
    {
        name: 'Descending',
        value: 'desc',
    },
]

export default function AssignStaffPage() {
    const [rows, setRows] = React.useState<any>(demoStaffs)
    const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
        {}
    )
    const router = useRouter()
    const { requestId } = router.query

    const staffRes = useQuery({
        queryKey: ['get-all-staff'],
        queryFn: () => getStaffOnly,
        retry: 2,
    })

    const myForm = useForm<AssignStaffFilterSchemaType>({
        defaultValues: {},
        resolver: yupResolver(AssignStaffFilterSchema),
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

    const assignStaffMutation = useMutation({
        mutationKey: ['assign-staff-mutation'],
        mutationFn: (body: { requestId: number; staffId: number }) =>
            assignStaffToRequest(body),
    })

    const onSubmit: SubmitHandler<AssignStaffFilterSchemaType> = async (
        data
    ) => {
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

    useEffect(() => {
        if (staffRes.isSuccess) {
            setRows(staffRes.data.data.data)
        }
    }, [staffRes.status])

    const columns: GridColDef[] = [
        {
            field: 'code',
            headerName: 'Staff Code',
            width: 90,
            hideable: true,
        },
        {
            field: 'name',
            headerName: 'Staff name',
            width: 220,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 200,
        },
        { field: 'phone', headerName: "Staff's Phone", width: 130 },
        {
            field: 'address',
            headerName: 'Address',
            width: 400,
        },
        // {
        //     field: 'numberOfRequestWorking',
        //     headerName: 'Requests Working On',
        //     width: 170,
        // },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Assign',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id, row }) => {
                return [
                    <GridActionsCellItem
                        key="assign"
                        icon={<AssignIcon />}
                        label="Assign"
                        className="textPrimary text-orange"
                        onClick={handleAssignClick(id)}
                        color="inherit"
                    />,
                ]
            },
        },
    ]

    const handleAssignClick = (id: GridRowId) => () => {
        if (!requestId) {
            notFound()
        }
        const body = {
            requestId: parseInt(requestId as string),
            staffId: id as number,
        }

        assignStaffMutation.mutate(body, {
            onSuccess: (data) => {
                toast.success(data.data.message)
                router.push('/staff/requests')
            },
            onError: (data) => {
                toast.error('Assign staff Failed')
            },
        })
    }

    return (
        <StaffLayout title="Assign Staff To Request">
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
                                name="Number Of Working Request"
                                id="filter-working-request"
                                label="Number Of Working Request"
                                items={NUMBER_OF_REQUESTS}
                                className="w-[18rem]"
                                onChange={() => {
                                    submitButton.current.click()
                                }}
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
            <Table editMode="row" rows={rows} columns={columns} />
        </StaffLayout>
    )
}
