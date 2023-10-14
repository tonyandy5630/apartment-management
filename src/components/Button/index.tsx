import React from 'react'
import { Button as MUIButton } from '@mui/material'

type ButtonProps = {
    children?: React.ReactNode
    className?: string
}

export default function Button({ children, className }: ButtonProps) {
    return (
        <MUIButton variant="outlined" className={className}>
            {children}
        </MUIButton>
    )
}
