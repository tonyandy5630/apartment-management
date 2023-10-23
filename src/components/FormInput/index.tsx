import React, { useState, useEffect } from 'react'
import { Control } from 'react-hook-form'
import {
    InputLabel,
    FormHelperText,
    OutlinedInput,
    Stack,
    FormControl,
    IconButton,
    InputAdornment,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import type { UseFormRegister } from 'react-hook-form'
import { IFormInputProps } from '@/types/auth-component.type'

interface InputProps extends IFormInputProps {
    inputType?: InputType
    startAdornment?: React.ReactNode
    inputClassName?: string
    disable?: boolean
}

export default function FormInput({
    label,
    helperText,
    placeholder,
    inputType = 'standard',
    id,
    name,
    autocomplete,
    helperTextIsError,
    disable = false,
    isRequired = false,
    inputProps,
    register,
    registerOptions,
    className,
    startAdornment,
    sx,
    inputClassName,
}: InputProps) {
    const [showPwd, setShowPwd] = useState<Boolean>(false)
    const [isError, setIsError] = useState<boolean | undefined>(
        helperTextIsError
    )

    const handleClickShowPassword = () => setShowPwd((show) => !show)

    useEffect(() => {
        setIsError((prev) => helperTextIsError)
    }, [helperTextIsError])

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault()
    }

    return (
        <FormControl
            component={Stack}
            required={isRequired}
            className={`${className}`}
        >
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <OutlinedInput
                className={`text-black rounded-sm h-[3rem] ${inputClassName}`}
                id={id}
                {...register(name, registerOptions)}
                autoComplete={autocomplete}
                error={isError}
                inputProps={inputProps}
                label={label}
                disabled={disable}
                sx={{
                    fontSize: 14,
                    ...sx,
                }}
                placeholder={placeholder}
                type={inputType === 'password' && showPwd ? '' : inputType}
                startAdornment={startAdornment}
                endAdornment={
                    inputType === 'password' ? (
                        <InputAdornment position="end" className="mr-3">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {showPwd ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ) : (
                        ''
                    )
                }
            />

            {helperText !== '' || helperText !== undefined ? (
                <FormHelperText error={helperTextIsError}>
                    {helperText}
                </FormHelperText>
            ) : (
                <></>
            )}
        </FormControl>
    )
}

export type InputType = 'standard' | 'password'
