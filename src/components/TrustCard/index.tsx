import React from 'react'
import '@/styles/homepage.scss'
import { Stack, Typography } from '@mui/material'
import Decorate from './Decorate'
type Props = {
    title?: string
    description?: string
    isSecond?: boolean
}
export default function TrustCard({
    title,
    description,
    isSecond = false,
}: Props) {
    return (
        <div className="trust-card">
            <Stack
                justifyContent="space-evenly"
                alignItems="flex-start"
                className="min-h-full w-fit"
            >
                <Typography
                    fontSize="39px"
                    letterSpacing={1}
                    fontWeight="bold"
                    textAlign="left"
                    className="trust-card-title max-w-[200px]"
                    textTransform="capitalize"
                >
                    {title}
                </Typography>
                <Typography fontSize="20px" className="max-w-[200px]">
                    You can be anywhere and the house still be the same
                </Typography>
            </Stack>
            <Decorate isOrange={!isSecond} isTopLeft={true} />
            <Decorate isOrange={!!isSecond} isTopLeft={false} />
        </div>
    )
}
