import { FormControl, InputLabel, OutlinedInput } from '@mui/material'
import React, { useState } from 'react'

type Props = {
    startAdornment?: React.ReactNode
    endAdornment?: React.ReactNode
    label: string
    placeholder?: string
    classname?: string
    id: string
}

export default function Input({
    startAdornment,
    endAdornment,
    label,
    placeholder,
    classname,
    id,
}: Props) {
    const [value, setValue] = useState<string>()

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    return (
        <FormControl className={`${classname}`} variant="outlined">
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <OutlinedInput
                startAdornment={startAdornment}
                endAdornment={endAdornment}
                label={label}
                placeholder={placeholder}
                value={value}
                onChange={handleChangeInput}
                id={id}

                // className={`${classname}`}
            />
        </FormControl>
    )
}
