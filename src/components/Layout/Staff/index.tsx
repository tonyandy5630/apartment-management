import '@/styles/main.scss'
import React from 'react'
import StaffHeader from '@/components/Header/Staff'
import Footer from '@/components/Footer'
import { Container, Typography } from '@mui/material'
import MyContainer from '@/components/Container'
import useAuthenticated from '@/hooks/useAuthenticated'

type Props = {
    children?: React.ReactNode
    title: string
}
export default function StaffLayout({ children, title }: Props) {
    useAuthenticated()
    return (
        <>
            <StaffHeader />
            <main className="background">
                <MyContainer>
                    <Typography
                        textTransform="capitalize"
                        fontWeight={600}
                        variant="h4"
                        gutterBottom
                    >
                        {title}
                    </Typography>
                    {children}
                </MyContainer>
            </main>
            <Footer />
        </>
    )
}
