import { IFormInputProps, MenuItemType } from '@/types/auth-component.type'
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
    formClassName?: string
    hasDefaultValue?: boolean
    onChange?: Function
}

export default function FormSelect({
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
    formClassName,
    hasDefaultValue = false,
    onChange,
}: SelectProps) {
    const [value, setValue] = React.useState('')

    const handleSelectChange = (event: SelectChangeEvent) => {
        setValue(event.target.value)
        if (onChange) {
            onChange()
        }
    }

    return (
        <FormControl
            sx={{ minWidth: 120 }}
            className={`${formClassName}`}
            size="medium"
        >
            <InputLabel id={id}>{label}</InputLabel>
            <Select
                className={` text-black rounded-sm h-full w-full ${className}`}
                id={id}
                {...register(name, registerOptions)}
                autoComplete={autocomplete}
                inputProps={inputProps}
                label={label}
                sx={{
                    fontSize: 14,
                    ...sx,
                }}
                labelId={id}
                defaultValue={hasDefaultValue ? items[0].value : ''}
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
