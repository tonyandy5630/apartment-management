import { Typography } from '@mui/material'
import React from 'react'

type Props = {
    children?: React.ReactNode
    isTitleOrange: boolean
    isLong?: boolean
}

export default function ServiceTitle({
    children,
    isTitleOrange,
    isLong,
}: Props) {
    return (
        <Typography
            variant="h4"
            fontWeight="bold"
            className={`${isLong ? 'max-w-[420px]' : 'max-w-[400px]'} ${
                isTitleOrange ? 'text-orange' : ' text-white'
            }`}
        >
            {children}
        </Typography>
    )
}
