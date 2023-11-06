import '@/styles/login.scss'
import React, { useCallback, useEffect, useState } from 'react'
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
import { loginStaff, renewTokenAndUser } from '@/store/actions/authActions'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { AuthResponse } from '@/types/auth.type'
import { getAccessTokenFromLS } from '@/utils/auth'

const loginSchema = UserSchema.omit(['address', 'name', 'phone', 'rePassword'])

export default function LoginPage() {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.userAuthenticate.user)
    const isLoading = useAppSelector((state) => state.userAuthenticate.loading)

    const [imgURL, setImgURL] = useState<string>(
        'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    )
    const [logoURL, setLogoURL] = useState<string>(
        'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png'
    )
    const router = useRouter()
    const {
        register,
        handleSubmit,
        reset,
        control,
        setError,
        watch,
        formState: { errors },
    } = useForm<
        Omit<UserSchemaType, 'phone' | 'name' | 'rePassword' | 'address'>
    >({
        defaultValues: {
            email: '',
            password: '',
        },
        resolver: yupResolver(loginSchema),
    })
    useEffect(() => {
        setImages()
    }, [])

    useEffect(() => {
        console.log(true)
        const getUser = async () => {
            const request = await dispatch(renewTokenAndUser())
            if (request.payload) {
                const { success } = request.payload as AuthResponse
                if (success) {
                    router.push('/staff/requests')
                }
            }
        }
        if (!user && getAccessTokenFromLS() !== '') {
            getUser()
        } else {
            router.push('/staff/requests')
        }
    }, [user?.name])

    const setImages = useCallback(() => {
        getImageURLFromFirebase('login.jpg')?.then((URL) => {
            setImgURL(URL)
        })
        getImageURLFromFirebase('logo-orange.png')?.then((URL) => {
            setLogoURL(URL)
        })
    }, [])

    const onSubmit: SubmitHandler<
        Omit<UserSchemaType, 'phone' | 'name' | 'rePassword' | 'address'>
    > = async (data) => {
        const req = await dispatch(loginStaff(data))
        if (req.meta.requestStatus === 'fulfilled') {
            router.push('requests')
        }

        if (req.meta.requestStatus === 'rejected') {
            setError('password', {
                type: 'Server',
                message: 'Wrong email or password',
            })
            setError('email', {
                type: 'Server',
                message: 'Wrong email or password',
            })
            reset(
                {
                    email: '',
                    password: '',
                },
                {
                    keepErrors: true,
                }
            )
        }
    }

    return (
        <>
            <Head>
                <title>Staff Login Page</title>
            </Head>
            <div className="login-background">
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
                            className="w-[386.7px] h-full p-3 border-2 border-black rounded-e-md"
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
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="flex flex-col items-start justify-center gap-y-3"
                                >
                                    <FormInput
                                        control={control}
                                        name="email"
                                        id="email"
                                        autocomplete="on"
                                        label="Email"
                                        isRequired={true}
                                        register={register}
                                        placeholder="Example: tonyandy789"
                                        className="w-full"
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
                                        className="w-full m-0 border-red-300 rounded-sm"
                                        helperText={errors.password?.message}
                                        helperTextIsError={
                                            errors.password !== undefined
                                        }
                                    />
                                    <Stack
                                        direction="row"
                                        justifyContent="flex-end"
                                        alignItems="center"
                                        width="100%"
                                    >
                                        <Link
                                            href="/forgot-password"
                                            className="text-sm text-black underline"
                                        >
                                            Forgot password ?
                                        </Link>
                                    </Stack>
                                    <Stack
                                        className="w-full"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Button
                                            loading={
                                                isLoading === undefined ?? true
                                            }
                                            className="w-32 text-black border border-black rounded-none bg-orange"
                                        >
                                            Login
                                        </Button>
                                    </Stack>
                                </form>
                            </Box>
                            <Stack width="70%">
                                <Divider
                                    orientation="horizontal"
                                    flexItem
                                    className="text-xs text-orange"
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
        </>
    )
}
