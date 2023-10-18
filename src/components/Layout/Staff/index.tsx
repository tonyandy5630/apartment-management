import '@/styles/main.scss'
import '@/styles/header.scss'
import React from 'react'
import StaffHeader from '@/components/Header/Staff'
import Footer from '@/components/Footer'
import { Typography } from '@mui/material'

type Props = {
    children?: React.ReactNode
    title: string
}
export default function StaffLayout({ children, title }: Props) {
    return (
        <>
            <StaffHeader />
            <main className="background">
                <Typography
                    textTransform="capitalize"
                    fontWeight={600}
                    variant="h4"
                >
                    {title}
                </Typography>
                {children}
            </main>
            <Footer />
        </>
    )
}
