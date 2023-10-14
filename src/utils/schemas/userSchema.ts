import { object, string, InferType } from 'yup'
import getRules from '../rules/auth'
import { EMPTY_WARNING } from '@/constant/auth'

const rules = getRules()

const UserSchema = object({
    username: string()
        .min(rules.username.minLength.value, rules.username.minLength.message)
        .max(rules.username.maxLength.value, rules.username.maxLength.message)
        .required(EMPTY_WARNING),
    fullname: string()
        .min(rules.fullname.minLength.value, rules.fullname.minLength.message)
        .max(rules.fullname.maxLength.value, rules.fullname.minLength.message)
        .required(EMPTY_WARNING),
    email: string()
        .min(rules.email.minLength.value, rules.email.minLength.message)
        .max(rules.email.maxLength.value, rules.email.maxLength.message)
        .email('Không phải là email')
        .required(EMPTY_WARNING),
    password: string().min(5).max(20).required(EMPTY_WARNING),
})

export type UserSchemaType = InferType<typeof UserSchema>
export default UserSchema
