import { AppBar, Box, Toolbar } from '@mui/material'
import React from 'react'

export default function Header() {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar></Toolbar>
            </AppBar>
        </Box>
    )
}
