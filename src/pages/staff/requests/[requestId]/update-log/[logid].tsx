import FormSelect from '@/components/FormInput/Select'
import StaffLayout from '@/components/Layout/Staff'
import RequestTitle from '@/components/RequestDetailContainer/RequestApartmentTitle'
import { STATUS_iTEM, demoRequest, demoTask } from '@/utils/demoData'
import requestLogSchema, {
    RequestLogSchemaType,
} from '@/utils/schemas/requestLog'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import Grid from '@mui/material/Unstable_Grid2'
import FormInput from '@/components/FormInput'
import Button from '@/components/Button'
import ClearIcon from '@mui/icons-material/Delete'
import SaveIcon from '@mui/icons-material/Save'
import { AlertColor, Stack } from '@mui/material'
import MySnackBar from '@/components/Alert'

const COLUMN = 5

export default function UpdateLog() {
    const [openAlert, setOpenAlert] = useState(false)
    const [message, setMessage] = useState('')
    const [severity, setSeverity] = useState<AlertColor>('info')
    const router = useRouter()
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
    const { logid } = router.query

    const onSubmit: SubmitHandler<RequestLogSchemaType> = async (data) => {
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

    const handleClearClick = () => {}
    return (
        <StaffLayout title="Update Request Log">
            <RequestTitle
                apartmentName={demoRequest.apartmentName}
                owner={demoRequest.owner}
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
                            items={STATUS_iTEM}
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
