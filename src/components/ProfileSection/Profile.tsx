import React from 'react'
import RequestInfoTitle from '../RequestDetailContainer/RequestInfo/Title'
import Grid from '@mui/material/Unstable_Grid2'
import UserSchema, { UserSchemaType } from '@/utils/schemas/userSchema'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useAppDispatch, useAppSelector } from '@/store'
import FormInput from '../FormInput'
import Button from '../Button'
import { Box, Stack } from '@mui/material'

export default function ProfileSection() {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.userAuthenticate.user)

    const {
        register,
        handleSubmit,
        reset,
        control,
        setError,
        watch,
        formState: { errors },
    } = useForm<UserSchemaType>({
        defaultValues: {},
        resolver: yupResolver(UserSchema),
    })

    return (
        <form className="">
            <RequestInfoTitle title="Profile" />
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
                    <Grid xs={5}>
                        <FormInput
                            control={control}
                            register={register}
                            name="name"
                            label="Name"
                            className="w-full"
                            id="update-name"
                        />
                    </Grid>
                    <Grid xs={5}>
                        <FormInput
                            control={control}
                            register={register}
                            name="Role"
                            label="Role"
                            disable={true}
                            className="w-full"
                            id="role"
                        />
                    </Grid>
                    <Grid xs={5}>
                        <FormInput
                            control={control}
                            register={register}
                            name="email"
                            label="Email"
                            className="w-full"
                            id="role"
                        />
                    </Grid>
                    <Grid xs={5}>
                        <FormInput
                            control={control}
                            register={register}
                            name="phone"
                            label="Phone"
                            className="w-full"
                            id="update-role"
                        />
                    </Grid>
                    <Grid xs={12}>
                        <FormInput
                            control={control}
                            register={register}
                            className="w-full"
                            name="address"
                            label="Address"
                            id="update-address"
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
