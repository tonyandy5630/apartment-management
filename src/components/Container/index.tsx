import { Container } from '@mui/material'
import React from 'react'
type Props = {
    children: React.ReactNode
}

export default function MyContainer({ children }: Props) {
    return (
        <Container disableGutters maxWidth={'xl'} sx={{ paddingX: '95px' }}>
            {children}
        </Container>
    )
}
