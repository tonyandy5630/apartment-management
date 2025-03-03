import React, { useEffect, useState } from 'react'
import '@/styles/login.scss'
import { Box, Container, Divider, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import getImageURLFromFirebase from '@/utils/firebase/getImage'
import { useAppDispatch, useAppSelector } from '@/store'
import { SubmitHandler, useForm } from 'react-hook-form'
import UserSchema, { UserSchemaType } from '@/utils/schemas/userSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import FormInput from '@/components/FormInput'
import _ from 'lodash'
import Link from 'next/link'
import Button from '@/components/Button'
import GoogleIcon from '@/components/Icons/Google'

export default function LoginPage() {
    const dispatch = useAppDispatch()
    const [imgURL, setImgURL] = useState<string>('')
    const [logoURL, setLogoURL] = useState<string>('')
    const [loading, setIsLoading] = useState(true)

    const user = useAppSelector((state) => state.userAuthenticate.user)
    const {
        register,
        handleSubmit,
        reset,
        control,
        setError,
        formState: { errors },
    } = useForm<UserSchemaType>({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(UserSchema),
    })

    useEffect(() => {
        getImageURLFromFirebase('login.jpg')?.then((URL) => {
            setImgURL(URL)
            setIsLoading((prev) => !prev)
        })
        getImageURLFromFirebase('logo-orange.png')?.then((URL) => {
            setLogoURL(URL)
        })
    }, [])

    const onSubmit: SubmitHandler<
        Omit<UserSchemaType, 'email' | 'fullname' | 'role'>
    > = async (data) => {
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

    return (
        <div className="background">
            <Container
                maxWidth="lg"
                className="flex items-center justify-center h-full "
            >
                <Stack
                    direction="row"
                    className="w-[94%] max-h-[30rem] h-full rounded-lg bg-white drop-shadow-xl"
                >
                    <Image
                        src={imgURL}
                        width={1000}
                        height={600}
                        alt="Living room"
                        className="w-2/3 h-full rounded-tl-md rounded-bl-md"
                        priority
                    />
                    <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="space-evenly"
                        className="h-full p-3 border-2 border-black w-[386.7px] rounded-e-md"
                    >
                        <Image
                            src={logoURL}
                            width={60}
                            height={73.3}
                            alt="Company logo"
                        />
                        <Box
                            sx={{
                                width: '76%',
                            }}
                        >
                            <form
                                className="flex flex-col items-center justify-center gap-y-5"
                                onSubmit={handleSubmit(onSubmit)}
                            >
                                <FormInput
                                    control={control}
                                    name="username"
                                    id="username"
                                    autocomplete="on"
                                    label="Username"
                                    isRequired={true}
                                    register={register}
                                    placeholder="Example: tonyandy789"
                                    helperText={errors.email?.message}
                                    helperTextIsError={
                                        errors.email !== undefined
                                    }
                                />
                                <FormInput
                                    control={control}
                                    name="password"
                                    id="password"
                                    autocomplete="on"
                                    inputType="password"
                                    label="Password"
                                    isRequired={true}
                                    register={register}
                                    placeholder="Enter password"
                                    className="m-0 border-red-300 rounded-sm"
                                    helperText={errors.password?.message}
                                    helperTextIsError={
                                        errors.password !== undefined
                                    }
                                />
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    width="100%"
                                >
                                    <Link
                                        href="/corporate"
                                        className="text-sm underline text-secBlue"
                                    >
                                        Corporate with us
                                    </Link>
                                    <Link
                                        href="/forgot-password"
                                        className="text-sm text-black underline"
                                    >
                                        Forgot password ?
                                    </Link>
                                </Stack>
                                <Button className="w-32 text-black border border-black rounded-none bg-orange">
                                    Login
                                </Button>
                            </form>
                        </Box>
                        <Stack width="70%">
                            <Divider
                                orientation="horizontal"
                                flexItem
                                className="text-xs  text-orange"
                                sx={{
                                    '&::before,&::after': {
                                        borderTop: '2px solid #FF8228',
                                    },
                                }}
                            >
                                OR
                            </Divider>
                        </Stack>
                        <Typography className="text-lg text-black">
                            Login with
                        </Typography>
                        <Button className="text-white bg-blue-500 border-none rounded-sm w-44 hover:border-none hover:rounded-sm hover:bg-blue-500">
                            <GoogleIcon /> Google
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </div>
    )
}
