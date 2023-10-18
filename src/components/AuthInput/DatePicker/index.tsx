import { IFormInputProps } from '@/types/auth-component'
import React, { SyntheticEvent, useState } from 'react'
import { Controller, UseFormRegister, useFormContext } from 'react-hook-form'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { Stack } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

type Props = {
    name: string
    label: string
    sx?: object
    control?: any
    default?: any
    minDate?: any
    maxDate?: any
    handleChange?: Function
}

export default function MyDatePicker({
    name,
    sx,
    label,
    default: defaultValue,
    minDate,
    maxDate,
    handleChange,
}: Props) {
    const [dpValue, setValue] = useState(
        defaultValue ?? new Date().toDateString()
    )
    const { control } = useFormContext()

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <Stack className="relative h-full">
                    <label className="bg-skin absolute top-[-7px] left-3 text-[#978e82]  z-10">
                        {label}
                    </label>
                    <ReactDatePicker
                        className="border border-[#c3bcb2] h-[3.4rem] bg-transparent z-0 date-picker px-3"
                        onChange={(e: any) => {
                            if (handleChange) {
                                handleChange()
                            }
                            return field.onChange(e)
                        }}
                        onBlur={field.onBlur} // notify when input is touched/blur
                        selected={field.value}
                        placeholderText={label}
                        minDate={minDate}
                        maxDate={maxDate}
                        icon={<CalendarMonthIcon />}
                    />
                </Stack>
            )}
        />
    )
}
