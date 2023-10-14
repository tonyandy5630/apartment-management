import { Control, UseFormRegister } from 'react-hook-form'

export type MenuItemType = {
    value: string
    name: string
}

export type IFormInputProps = {
    label?: String
    placeholder?: string
    id: string
    helperText?: string
    helperTextIsError?: boolean
    name: string
    control: Control<any>
    autocomplete?: string
    isRequired?: boolean
    rules?: object
    inputProps?: object
    register: UseFormRegister<any>
    registerOptions?: object
    className?: string
    sx?: object
}
