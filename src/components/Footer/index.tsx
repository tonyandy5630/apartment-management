import { Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Logo from '@/../public/logo.png'
export default function Footer() {
    return (
        <div className="min-w-screen min-h-[100px] bg-black border-t">
            <Container>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Stack direction={'row'} alignItems="center">
                        <Image
                            src={Logo.src}
                            width={100}
                            height={100}
                            alt="Company Logo"
                        />
                        <Stack>
                            <Typography>Apartee Company</Typography>
                            <Typography>Contact us: +1233456434</Typography>
                            <Typography>Email: apartee@company.vn</Typography>
                        </Stack>
                    </Stack>
                    <Typography>
                        &copy; 2023 Apartee Company. All Rights Reserved.
                    </Typography>
                </Stack>
            </Container>
        </div>
    )
}
