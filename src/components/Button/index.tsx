import React from 'react'
import LoadingButton from '@mui/lab/LoadingButton'
type ButtonProps = {
    children?: React.ReactNode
    className?: string
    type?: 'submit' | 'button'
    handleButtonClick?: () => void
    variant?: 'primary' | 'secondary'
    loading?: boolean
}

export default function Button({
    children,
    className,
    type = 'submit',
    variant = 'primary',
    loading,
    handleButtonClick,
}: ButtonProps) {
    switch (variant) {
        case 'primary':
            return (
                <LoadingButton
                    loadingIndicator="Loading…"
                    type={type}
                    variant="contained"
                    loading={loading}
                    sx={{ border: '1px solid black' }}
                    className={` bg-orange min-w-[110px]  ${className}`}
                    onClick={handleButtonClick}
                    disableElevation
                >
                    {children}
                </LoadingButton>
            )
        case 'secondary':
            return (
                <LoadingButton
                    loadingIndicator="Loading…"
                    type={type}
                    loading={loading}
                    variant="outlined"
                    className={`min-w-[110px] ${className}`}
                    onClick={handleButtonClick}
                    disableElevation
                >
                    {children}
                </LoadingButton>
            )
        default:
            return (
                <LoadingButton
                    type={type}
                    variant="contained"
                    sx={{ border: '1px solid black' }}
                    className={` bg-orange min-w-[110px]  ${className}`}
                    onClick={handleButtonClick}
                    disableElevation
                >
                    {children}
                </LoadingButton>
            )
    }
}
