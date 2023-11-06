import '@/styles/request-management.scss'
import StaffLayout from '@/components/Layout/Staff'
import RequestTitle from '@/components/RequestDetailContainer/RequestApartmentTitle'
import Request, { RequestDetail } from '@/types/request.type'
import Grid from '@mui/material/Unstable_Grid2'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { MenuItemType } from '@/types/form-component.type'
import { SubmitHandler, useForm } from 'react-hook-form'
import FormSelect from '@/components/FormInput/Select'
import requestLogSchema, {
    RequestLogSchemaType,
} from '@/utils/schemas/requestLog'
import { yupResolver } from '@hookform/resolvers/yup'
import Button from '@/components/Button'
import FormInput from '@/components/FormInput'
import { AlertColor, Stack } from '@mui/material'
import ClearIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import MySnackBar from '@/components/Alert'
import { demoRequest, demoTask } from '@/utils/demoData'

const STATUS_ITEM: Array<MenuItemType> = [
    {
        name: 'Working',
        value: '1',
    },
    {
        name: 'Done',
        value: '0',
    },
]

const demoRequestDetail: RequestDetail = {
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

const COLUMN = 5
export default function CreateLogForRequestDetail() {
    const {
        register,
        handleSubmit,
        reset,
        control,
        setError,
        watch,
        formState: { errors },
    } = useForm<RequestLogSchemaType>({
        defaultValues: {
            status: 'Working',
            task: 1,
        },
        resolver: yupResolver(requestLogSchema),
    })
    const router = useRouter()
    const [openAlert, setOpenAlert] = useState(false)
    const { requestId } = router.query
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState<AlertColor>('info')
    const onSubmit: SubmitHandler<RequestLogSchemaType> = async (data) => {
        console.log(data)
        onSaving()
        setTimeout(onSaveSuccess, 2000)

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

    const handleClearClick = () => {
        reset({
            description: '',
            maintainItem: '',
            image: '',
        })
    }

    const onSaveSuccess = () => {
        setOpenAlert(true)
        setSeverity('success')
        setMessage('Saved Succeed')
        setTimeout(() => {
            setOpenAlert(false)
        }, 3000)
    }

    const onSaving = () => {
        setOpenAlert(true)
        setSeverity('info')
        setMessage('Saving...')
    }

    return (
        <StaffLayout title="Create Log">
            <RequestTitle
                apartmentName={demoRequest.rdDetail.apartmentName}
                owner={demoRequest.rdDetail.owner}
            />
            <form onSubmit={handleSubmit(onSubmit)} className="w-4/6 h-auto">
                <Grid
                    container
                    justifyContent="space-between"
                    direction="row"
                    wrap="wrap"
                    rowGap={2}
                    className="h-fit"
                >
                    <Grid xs={COLUMN} className="grid">
                        <FormSelect
                            control={control}
                            name="task"
                            hasDefaultValue={true}
                            label="Select"
                            id="task-select"
                            items={demoTask}
                            isRequired={true}
                            formClassName="h-3/5"
                            register={register}
                        />
                    </Grid>
                    <Grid xs={COLUMN} className="grid ">
                        <FormInput
                            control={control}
                            register={register}
                            name="maintainItem"
                            id="maintain-item"
                            label="Maintain Item"
                            placeholder="Example: Floor"
                        />
                    </Grid>
                    <Grid xs={COLUMN} className="grid ">
                        <FormInput
                            control={control}
                            register={register}
                            name="image"
                            id="image"
                            label="Image"
                            placeholder="http://google.com"
                        />
                    </Grid>
                    <Grid xs={COLUMN} className="grid">
                        <FormInput
                            control={control}
                            register={register}
                            name="description"
                            id="description"
                            label="Description"
                        />
                    </Grid>
                    <Grid xs={COLUMN} className="grid">
                        <FormSelect
                            control={control}
                            name="status"
                            hasDefaultValue={true}
                            label="Status"
                            id="status-select"
                            items={STATUS_ITEM}
                            isRequired={true}
                            formClassName="h-3/5"
                            register={register}
                        />
                    </Grid>
                </Grid>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    className="w-fit"
                    gap={2}
                >
                    <Button variant="primary">
                        <SaveIcon /> Save
                    </Button>
                    <Button
                        variant="secondary"
                        type="button"
                        handleButtonClick={handleClearClick}
                    >
                        <ClearIcon />
                        Clear
                    </Button>
                </Stack>
            </form>
            <MySnackBar
                openAlert={openAlert}
                severity={severity}
                message={message}
            />
        </StaffLayout>
    )
}
