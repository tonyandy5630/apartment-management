import React, { useState } from 'react'
import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material'
import { MenuItemType } from '@/types/form-component.type'

type Props = {
    id: string
    label: string
    sx?: any
    classname?: string
    labelId: string
    items: Array<MenuItemType>
}

export default function MySelect({
    id,
    label,
    sx,
    items,
    classname,
    labelId,
}: Props) {
    const [item, setItem] = useState(items[0].value)

    const handleSelectChange = (event: SelectChangeEvent) => {
        setItem(event.target.value)
    }

    return (
        <FormControl className={`w-32  h-full ${classname}`}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                className={` text-black rounded-sm `}
                id={id}
                label={label}
                sx={{
                    fontSize: 14,
                    ...sx,
                }}
                labelId={labelId}
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
