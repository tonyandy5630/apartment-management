import '@/styles/main.scss'
import React, { useEffect, useState } from 'react'
import StaffHeader from '@/components/Header/Staff'
import Footer from '@/components/Footer'
import { Container, Typography } from '@mui/material'
import MyContainer from '@/components/Container'
import useAuthenticated from '@/hooks/useAuthenticated'
import { MANAGER, STAFF } from '@/constant/auth'
import MyDialog from '@/components/Dialog'
import { useRouter } from 'next/router'
import { clearLS } from '@/utils/auth'

type Props = {
    children?: React.ReactNode
    title: string
}
export default function StaffLayout({ children, title }: Props) {
    const { loading, role } = useAuthenticated()
    const [openDialog, setOpenDialog] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (!loading) {
            if (
                role.toString() !== STAFF.id.toString() &&
                role.toString() !== MANAGER.id.toString()
            ) {
                setOpenDialog(true)
            }
        }
    }, [loading])

    const handleCloseDialog = () => {
        router.push('/staff/login')
        clearLS()
        setOpenDialog(false)
    }
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
                    {!loading && children}
                </MyContainer>
            </main>
            <MyDialog
                content="You do not have the permission to access this page"
                title="Not authorized"
                buttonContent="Back to Login"
                open={openDialog}
                buttonAction={handleCloseDialog}
            />
            <Footer />
        </>
    )
}
