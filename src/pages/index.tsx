import { Container, LinearProgress, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Index() {
    return (
        <Container maxWidth="md" className="min-h-screen bg-black">
            <Stack
                justifyContent="center"
                alignItems="center"
                className="h-screen"
                gap={5}
            >
                <Typography
                    variant="h1"
                    sx={{ color: '#FF8228', letterSpacing: '6px' }}
                >
                    APARTEE
                </Typography>
                <Typography className="text-white" variant="h2">
                    COMMING SOON
                </Typography>
            </Stack>
        </Container>
    )
}
