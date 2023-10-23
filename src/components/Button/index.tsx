import React from 'react'
import { Button as MUIButton } from '@mui/material'

type ButtonProps = {
    children?: React.ReactNode
    className?: string
    type?: 'submit' | 'button'
    handleButtonClick?: () => void
    variant?: 'primary' | 'secondary'
}

export default function Button({
    children,
    className,
    type = 'submit',
    variant = 'primary',
    handleButtonClick,
}: ButtonProps) {
    switch (variant) {
        case 'primary':
            return (
                <MUIButton
                    type={type}
                    variant="contained"
                    sx={{ border: '1px solid black' }}
                    className={` bg-orange min-w-[110px]  ${className}`}
                    onClick={handleButtonClick}
                    disableElevation
                >
                    {children}
                </MUIButton>
            )
        case 'secondary':
            return (
                <MUIButton
                    type={type}
                    variant="outlined"
                    className={`min-w-[110px] ${className}`}
                    onClick={handleButtonClick}
                    disableElevation
                >
                    {children}
                </MUIButton>
            )
        default:
            return (
                <MUIButton
                    type={type}
                    variant="contained"
                    sx={{ border: '1px solid black' }}
                    className={` bg-orange min-w-[110px]  ${className}`}
                    onClick={handleButtonClick}
                    disableElevation
                >
                    {children}
                </MUIButton>
            )
    }
}
