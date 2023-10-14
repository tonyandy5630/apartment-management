import { STAFF } from '@/constant/auth'
import { IFormInputProps, MenuItemType } from '@/types/auth-component'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material'
import React from 'react'

interface SelectProps extends IFormInputProps {
    items: Array<MenuItemType>
}

export default function AuthSelect({
    items,
    label,
    helperText,
    placeholder,
    id,
    name,
    autocomplete,
    helperTextIsError,
    isRequired = false,
    inputProps,
    register,
    registerOptions,
    className,
    sx,
}: SelectProps) {
    const [value, setValue] = React.useState('')

    const handleSelectChange = (event: SelectChangeEvent) => {
        setValue(event.target.value)
    }

    return (
        <FormControl sx={{ minWidth: 120 }} className="self-start" size="small">
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                className={` text-black rounded-sm h-[2rem]  ${className}`}
                id={id}
                {...register(name, registerOptions)}
                autoComplete={autocomplete}
                inputProps={inputProps}
                label={label}
                sx={{
                    fontSize: 14,
                    ...sx,
                }}
                labelId="auth-select"
                defaultValue={items[0].value}
                onChange={handleSelectChange}
            >
                {items.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    )
}
