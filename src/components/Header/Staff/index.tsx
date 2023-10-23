import '@/styles/header.scss'
import MyContainer from '@/components/Container'
import HideOnScroll from '@/components/HideOnScroll'
import { useAppDispatch, useAppSelector } from '@/store'
import { AppBar, Avatar, Box, Stack, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const AVATAR_RADIUS = 40

export default function StaffHeader() {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.userAuthenticate.user)

    return (
        <>
            <Box sx={{ flexGrow: 1, height: '64px' }}>
                <Box sx={{ height: '64px' }}></Box>
                <HideOnScroll>
                    <AppBar>
                        <MyContainer>
                            <Stack
                                component={Toolbar}
                                justifyContent="space-between"
                                direction="row"
                                className="p-0"
                            >
                                <Stack direction="row">
                                    <Typography className={`logo-title mr-6`}>
                                        Apartee
                                    </Typography>
                                    <Stack
                                        direction="row"
                                        component={Box}
                                        alignSelf="center"
                                    >
                                        <Link
                                            className="link"
                                            href="/staff/requests"
                                        >
                                            Requests
                                        </Link>
                                        <Link className="link" href="/log">
                                            Log
                                        </Link>
                                    </Stack>
                                </Stack>
                                <Stack
                                    direction="row"
                                    gap={2}
                                    className="staff-header"
                                    component={Link}
                                    href="profile?section=profile"
                                >
                                    <Avatar
                                        src="/broken-image.jpg"
                                        sx={{
                                            width: AVATAR_RADIUS,
                                            height: AVATAR_RADIUS,
                                        }}
                                    />
                                    <Stack
                                        justifyContent="space-between"
                                        alignItems="flex-start"
                                    >
                                        <Typography fontSize="15px">
                                            {user !== undefined
                                                ? user.name
                                                : 'Bui Thanh Tu'}
                                        </Typography>
                                        <Typography fontSize="13px">
                                            {user !== undefined
                                                ? user.email
                                                : 'tonyandy789@gmail.com'}
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </MyContainer>
                    </AppBar>
                </HideOnScroll>
            </Box>
        </>
    )
}
