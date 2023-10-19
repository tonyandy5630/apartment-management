import '@/styles/footer.scss'
import { Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import Logo from '@/../public/logo.png'
export default function Footer() {
    return (
        <div className="min-w-screen min-h-[100px] bg-black border-t absolute bottom-0 right-0 left-0">
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
                            <Typography className="footer-text">
                                Apartee Company
                            </Typography>
                            <Typography className="footer-text">
                                Contact us: +1233456434
                            </Typography>
                            <Typography className="footer-text">
                                Email: apartee@company.vn
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography className="footer-text">
                        &copy; 2023 Apartee Company. All Rights Reserved.
                    </Typography>
                </Stack>
            </Container>
        </div>
    )
}
