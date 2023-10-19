import { Typography } from '@mui/material'
import React from 'react'

type Props = {
    content?: string
}
export default function RequestInfoDetail({ content }: Props) {
    return (
        <Typography fontSize="15px" textAlign="left" fontWeight="medium">
            {content}
        </Typography>
    )
}
