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
import FormSelect from '@/components/FormInput/Select'
import { MenuItemType } from '@/types/auth-component.type'
import { MANAGER, STAFF } from '@/constant/auth'
import { loginStaff } from '@/store/actions/authActions'

const ROLE_ITEMS: Array<MenuItemType> = [
    {
        value: STAFF.id,
        name: STAFF.name,
    },
    {
        value: MANAGER.id,
        name: MANAGER.name,
    },
]

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
        watch,
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
        Omit<UserSchemaType, 'token' | 'name' | 'role' | 'phone'>
    > = async (data) => {
        console.log(data)
        const req = await dispatch(loginStaff(data))
        console.log(req.payload)
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
                                    className="m-0 border-red-300 rounded-sm w-full"
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
                                    <Button className="w-32 text-black border border-black rounded-none bg-orange">
                                        Login
                                    </Button>
                                </Stack>
                            </form>
                        </Box>
                        <Stack width="70%">
                            <Divider
                                orientation="horizontal"
                                flexItem
                                className="text-xs text-black text-orange"
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
