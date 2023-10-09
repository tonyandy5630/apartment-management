import { Stack, Typography } from '@mui/material'
import React from 'react'

type Props = {
    title?: string
}

export default function SectionTitle({ title }: Props) {
    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignContent="center"
            className="w-full"
        >
            <Typography
                textTransform="uppercase"
                fontWeight="bold"
                variant="h3"
                color="black"
            >
                {title}
            </Typography>
        </Stack>
    )
}
