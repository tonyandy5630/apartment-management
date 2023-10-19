import { Typography } from '@mui/material'
import React from 'react'

type Props = {
    title: string
}

export default function RequestInfoTitle({ title }: Props) {
    return (
        <Typography fontSize="19px" fontWeight="bold">
            {title}
        </Typography>
    )
}
