import { object, string, InferType } from 'yup'
import getRules from '../rules/auth'
import {
    EMPTY_WARNING,
    MANAGER,
    PHONE_REGEX,
    STAFF,
} from '@/constant/auth.constant'

const rules = getRules()

const UserSchema = object({
    email: string()
        .trim()
        .min(rules.email.minLength.value, rules.email.minLength.message)
        .max(rules.email.maxLength.value, rules.email.maxLength.message)
        .email('Not an email')
        .required(EMPTY_WARNING),
    password: string().trim().min(1).max(20).required(EMPTY_WARNING),
    name: string()
        .trim()
        .max(rules.name.maxLength.value, rules.name.maxLength.message)
        .required(EMPTY_WARNING),
    phone: string()
        .min(rules.phone.minLength.value, rules.phone.minLength.message)
        .max(rules.phone.maxLength.value, rules.phone.maxLength.message)
        .matches(PHONE_REGEX, 'Phone number is not valid'),
    address: string(),
    rePassword: string().min(1).max(20).required(EMPTY_WARNING),
    code: string(),
})

export type UserSchemaType = InferType<typeof UserSchema>
export default UserSchema
