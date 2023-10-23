import React from 'react'

type Props = {
    children?: React.ReactNode
    index: number
    value: number
}

export default function MyTabPanel(props: Props) {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            className="h-full"
            {...other}
        >
            {value === index && children}
        </div>
    )
}
