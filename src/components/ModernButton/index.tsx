import { Typography } from '@mui/material'
import React from 'react'
import '@/styles/homepage.scss'
export default function ModernButton() {
    return (
        <div className="join-button-container">
            <div className="join-button">
                <Typography textTransform="uppercase">Join with us</Typography>
            </div>
            <div className="join-button-shadow"></div>
        </div>
    )
}
