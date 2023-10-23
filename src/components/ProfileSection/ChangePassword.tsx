import React from 'react'
import RequestInfoTitle from '../RequestDetailContainer/RequestInfo/Title'
import { Stack } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import FormInput from '../FormInput'
import UserSchema, { UserSchemaType } from '@/utils/schemas/userSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import Button from '../Button'

const updatePasswordSchema = UserSchema.omit([
    'address',
    'email',
    'name',
    'phone',
])

export default function ChangePasswordSection() {
    const {
        register,
        handleSubmit,
        reset,
        control,
        setError,
        watch,
        formState: { errors },
    } = useForm<Omit<UserSchemaType, 'address' | 'email' | 'name' | 'phone'>>({
        defaultValues: {},
        resolver: yupResolver(updatePasswordSchema),
    })

    return (
        <form className="">
            <RequestInfoTitle title="Change Password" />
            <Stack
                justifyContent="center"
                alignItems="center"
                className="w-full h-[25rem]"
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    rowGap={3}
                >
                    <Grid xs={12}>
                        <FormInput
                            control={control}
                            register={register}
                            name="password"
                            label="Password"
                            id="update-password"
                        />
                    </Grid>
                    <Grid xs={12}>
                        <FormInput
                            control={control}
                            register={register}
                            name="newPassword"
                            label="New Password"
                            id="new-password"
                        />
                    </Grid>
                    <Grid xs={12}>
                        <FormInput
                            control={control}
                            register={register}
                            name="rePwd"
                            label="Confirm Password"
                            id="role"
                        />
                    </Grid>
                    <Grid xs={5}>
                        <Button variant="primary" className="mr-3">
                            Save
                        </Button>
                        <Button variant="secondary">Clear</Button>
                    </Grid>
                </Grid>
            </Stack>
        </form>
    )
}
