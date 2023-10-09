import React from 'react'
import SectionTitle from './SectionTitle'
import { Box } from '@mui/material'

type Props = {
    title?: string
    children?: React.ReactElement
    isBackgroundBlack: boolean
}

export default function Section({ title, children, isBackgroundBlack }: Props) {
    return (
        <>
            {title !== undefined ? <SectionTitle title={title} /> : <></>}
            <Box
                sx={{
                    width: '100%',
                    position: 'relative',
                    background: isBackgroundBlack ? 'black' : '#FF8228',
                    padding: '30px',
                }}
            >
                {children}
            </Box>
        </>
    )
}
