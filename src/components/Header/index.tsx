import {
    AppBar,
    Box,
    Container,
    Stack,
    Toolbar,
    Typography,
} from '@mui/material'
import React from 'react'
import styles from '@/styles/homepage.module.scss'
import Link from 'next/link'
import Button from '../Button'
import HideOnScroll from '../HideOnScroll'

export default function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1, height: '64px', zIndex: '-1' }}>
                <HideOnScroll>
                    <AppBar>
                        <Container disableGutters>
                            <Stack
                                component={Toolbar}
                                justifyContent="space-between"
                                direction="row"
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
                                        <Link className="link" href="/services">
                                            Services
                                        </Link>
                                        <Link className="link" href="/about-us">
                                            About us
                                        </Link>
                                    </Stack>
                                </Stack>
                                <Button className="text-black border-black justify-self-end h-7">
                                    Login
                                </Button>
                            </Stack>
                        </Container>
                    </AppBar>
                </HideOnScroll>
            </Box>
        </>
    )
}