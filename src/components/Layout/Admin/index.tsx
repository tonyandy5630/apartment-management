import '@/styles/main.scss'
import MyContainer from '@/components/Container'
import AdminHeader from '@/components/Header/Admin'
import { Typography } from '@mui/material'
import React from 'react'

type Props = {
    children?: React.ReactNode
    title: string
}

export default function AdminLayout({ children, title }: Props) {
    return (
        <>
            <AdminHeader />
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
        </>
    )
}
