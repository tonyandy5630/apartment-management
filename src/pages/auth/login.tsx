import React, { useEffect, useState } from 'react'
import '@/styles/login.scss'
import {
    Box,
    Container,
    Divider,
    Stack,
    Typography,
    Button as MUIButton,
} from '@mui/material'
import Image from 'next/image'
import getImageURLFromFirebase from '@/utils/firebase/getImage'
import { useAppDispatch, useAppSelector } from '@/store'
import { useForm } from 'react-hook-form'
import UserSchema, { UserSchemaType } from '@/utils/schemas/userSchema'
import { yupResolver } from '@hookform/resolvers/yup'
import AuthInput from '@/components/AuthInput'
import _ from 'lodash'
import Link from 'next/link'
import Button from '@/components/Button'
import GoogleIcon from '@/components/Icons/Google'

const LoginSchema = UserSchema.omit(['email', 'fullname'])

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
    } = useForm<Omit<UserSchemaType, 'email' | 'fullname'>>({
        defaultValues: {
            username: '',
            password: '',
        },
        resolver: yupResolver(LoginSchema),
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

    return (
        // !loading && (
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
                        className="w-[93%] h-full p-3 border-2 border-black rounded-e-md"
                    >
                        <Image
                            src={logoURL}
                            width={60}
                            height={90}
                            alt="Company logo"
                        />
                        <Box
                            sx={{
                                width: '76%',
                            }}
                        >
                            <form className="flex flex-col items-center justify-center gap-y-5">
                                <AuthInput
                                    control={control}
                                    name="username"
                                    id="username"
                                    autocomplete="on"
                                    label="Username"
                                    isRequired={true}
                                    register={register}
                                    placeholder="Example: tonyandy789"
                                    helperText={errors.username?.message}
                                    helperTextIsError={
                                        errors.username !== undefined
                                    }
                                />
                                <AuthInput
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
                            </form>
                            <Stack
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Link
                                    href="/corporate"
                                    className="text-secBlue underline text-sm"
                                >
                                    Corporate with us
                                </Link>
                                <Link
                                    href="/forgot-password"
                                    className="text-black underline text-sm"
                                >
                                    Forgot password ?
                                </Link>
                            </Stack>
                        </Box>
                        <Button className="bg-orange text-black border border-black w-32 rounded-none">
                            Login
                        </Button>
                        <Stack width="70%">
                            <Divider
                                orientation="horizontal"
                                flexItem
                                className="text-black text-xs text-orange"
                                sx={{
                                    '&::before,&::after': {
                                        borderTop: '2px solid #FF8228',
                                    },
                                }}
                            >
                                OR
                            </Divider>
                        </Stack>
                        <Typography className="text-black text-lg">
                            Login with
                        </Typography>
                        <Button
                            className="bg-blue-500 text-white w-44 hover:border-none hover:rounded-sm hover:bg-blue-500 border-none rounded-sm"
                            // sx={{
                            //     ':hover': {
                            //         textColor: 'black',
                            //     },
                            // }}
                        >
                            <GoogleIcon /> Google
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </div>
        // )
    )
}
