import '@/styles/header.scss'
import MyContainer from '@/components/Container'
import HideOnScroll from '@/components/HideOnScroll'
import { useAppDispatch, useAppSelector } from '@/store'
import { AppBar, Avatar, Box, Stack, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import { StaffBase } from '@/types/staff.type'

const AVATAR_RADIUS = 40

export default function AdminHeader() {
    const dispatch = useAppDispatch()
    const user = useAppSelector((state) => state.userAuthenticate.user)
    const loading = useAppSelector((state) => state.userAuthenticate.loading)
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
                                            href="/admin/requests"
                                        >
                                            Requests
                                        </Link>
                                        <Link
                                            className="link"
                                            href="/admin/owners"
                                        >
                                            Owners
                                        </Link>
                                        <Link
                                            className="link"
                                            href="/admin/packages"
                                        >
                                            Packages
                                        </Link>
                                        <Link
                                            className="link"
                                            href="/admin/apartments"
                                        >
                                            Apartments
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
                                            {user !== undefined && !loading
                                                ? (user as StaffBase).name
                                                : 'Loading...'}
                                        </Typography>
                                        <Typography fontSize="13px">
                                            {user !== undefined && !loading
                                                ? (user as StaffBase).email
                                                : 'Loading...'}
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
