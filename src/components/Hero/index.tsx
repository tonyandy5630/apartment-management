import { Box, Container, Stack, Typography } from '@mui/material'
import '@/styles/homepage.scss'
import React from 'react'
import Image from 'next/image'
import broom from '@/../public/broom.png'
import ModernButton from '../ModernButton'

type HeroProps = {
    children?: React.ReactElement
    slogan?: string
    subSlogan?: string
    joinCall?: string
}

export default function Hero({
    children,
    slogan,
    subSlogan,
    joinCall,
}: HeroProps) {
    return (
        <Box
            sx={{
                background: 'black',
                position: 'relative',
                zIndex: '10',
            }}
        >
            <Container
                component={Stack}
                className="p-3 py-12 h-[400px] flex flex-row z-10"
                justifyContent="space-between"
            >
                <Stack
                    className="min-h-full w-fit"
                    justifyContent="space-between"
                >
                    <Stack>
                        <Typography
                            className={`text-6xl font-bold slogan`}
                            gutterBottom
                        >
                            {slogan}
                        </Typography>
                        <Typography className="text-3xl" color="secondary">
                            {subSlogan}
                        </Typography>
                    </Stack>
                    <Stack gap={1}>
                        <Typography>{joinCall}</Typography>
                        <ModernButton />
                    </Stack>
                </Stack>
                <Image
                    src={broom.src}
                    width={300}
                    height={500}
                    className="min-h-[470px] w-auto h-auto min-w-[330px] absolute right-52 top-[-60px]"
                    alt="Broom"
                    priority
                />
            </Container>
        </Box>
    )
}
