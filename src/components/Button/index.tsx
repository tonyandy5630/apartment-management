import React from 'react'
import { Button as MUIButton } from '@mui/material'

type ButtonProps = {
    children?: string
    className?: string
    LinkComponent?: any
}

export default function Button({
    children,
    className,
    LinkComponent,
}: ButtonProps) {
    return (
        <MUIButton variant="outlined" className={className} {...LinkComponent}>
            {children}
        </MUIButton>
    )
}
