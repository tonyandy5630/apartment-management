import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import { slogan, joinCall, subSlogan } from '@/constant/homepage'
import React from 'react'
import CleaningPic from '@/../public/cleaning.jpg'
import Ladder from '@/../public/ladder.jpg'
import Image from 'next/image'
import { Box, Container, Stack, Typography } from '@mui/material'
import ServiceTitle from '@/components/Services/ServiceTitle'
import '@/styles/homepage.scss'
import Houses from '@/../public/houses.jpg'
import TrustCard from '@/components/TrustCard'
import Footer from '@/components/Footer'
import ModernButton from '@/components/ModernButton'

export default function Homepage() {
    return (
        <>
            <Header />
            <Hero slogan={slogan} subSlogan={subSlogan} joinCall={joinCall} />
            <Section title="our services" isBackgroundBlack={true}>
                <>
                    <Container>
                        <Box
                            sx={{
                                display: 'inline-block',
                                position: 'relative',
                                width: '420px',
                                height: '500px',
                                zIndex: '10',
                            }}
                        >
                            <Image
                                src={Ladder.src}
                                width={280}
                                height={400}
                                alt="Cleaning services"
                                className="absolute top-10"
                                priority
                            />
                            <Image
                                src={CleaningPic.src}
                                width={280}
                                height={400}
                                alt="Cleaning services"
                                className="absolute right-0 top-48"
                                priority
                            />
                        </Box>
                    </Container>
                    <Stack
                        gap={2}
                        className="absolute right-0 bg-red py-7 px-10  border-orange border border-r-0  top-36 max-w-[600px] min-w-[600px] min-h-[300px]"
                    >
                        <ServiceTitle isTitleOrange={true} isLong={false}>
                            Managing apartments Efficently
                        </ServiceTitle>
                        <Stack gap={1}>
                            <Typography fontSize="20px">
                                With the variety of staffs and services.
                            </Typography>
                            <Typography fontSize="20px">
                                We make sure that your apartment will look that
                                same even nobody is living in it
                            </Typography>
                        </Stack>
                    </Stack>
                </>
            </Section>
            <Section isBackgroundBlack={false}>
                <Container className="py-10">
                    <Stack
                        className="w-full"
                        direction="row"
                        justifyContent="space-between"
                    >
                        <Stack
                            justifyContent="space-evenly"
                            className="min-h-[260px]"
                        >
                            <ServiceTitle isTitleOrange={false} isLong={true}>
                                Track apartments state Easier
                            </ServiceTitle>
                            <Stack gap={1}>
                                <Typography
                                    fontSize="20px"
                                    className="max-w-[500px] text-black"
                                >
                                    We constantly update your apartment state
                                    whenever you need
                                </Typography>
                            </Stack>
                        </Stack>
                        <div className="picture-shadow">
                            <Image
                                src={Houses.src}
                                alt="Houses"
                                width={500}
                                height={300}
                                className="picture"
                                priority
                            />
                        </div>
                    </Stack>
                </Container>
            </Section>
            <Section title="Why us" isBackgroundBlack={true}>
                <Container>
                    <Stack justifyContent="center" alignItems="center">
                        <Stack
                            direction="row"
                            justifyContent="space-evenly"
                            gap={5}
                            className="mb-6"
                        >
                            <TrustCard title="Reliable" />
                            <TrustCard title="Trust worthy" isSecond={true} />
                            <TrustCard title="Reliable" />
                        </Stack>
                        <ModernButton />
                    </Stack>
                </Container>
            </Section>
            <Footer />
        </>
    )
}
