import Header from '@/components/Header'
import Hero from '@/components/Hero'
import SectionTitle from '@/components/SectionTitle'
import { slogan, joinCall, subSlogan } from '@/constant/homepage'
import { Stack, Typography } from '@mui/material'
import React from 'react'

export default function Homepage() {
    return (
        <>
            <Header />
            <Hero slogan={slogan} subSlogan={subSlogan} joinCall={joinCall} />
            <SectionTitle title="our services" />
        </>
    )
}
