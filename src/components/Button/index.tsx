import React from 'react'
import { Button as MUIButton } from '@mui/material'

type ButtonProps = {
    children?: React.ReactNode
    className?: string
    type?: 'submit'
}

export default function Button({
    children,
    className,
    type = 'submit',
}: ButtonProps) {
    return (
        <MUIButton type={type} variant="outlined" className={className}>
            {children}
        </MUIButton>
    )
}
