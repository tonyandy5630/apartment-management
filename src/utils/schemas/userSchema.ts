import { object, string, InferType } from 'yup'
import getRules from '../rules/auth'
import { EMPTY_WARNING, MANAGER, STAFF } from '@/constant/auth'

const rules = getRules()

const UserSchema = object({
    email: string()
        .min(rules.email.minLength.value, rules.email.minLength.message)
        .max(rules.email.maxLength.value, rules.email.maxLength.message)
        .email('Not an email')
        .required(EMPTY_WARNING),
    password: string().min(1).max(20).required(EMPTY_WARNING),
})

export type UserSchemaType = InferType<typeof UserSchema>
export default UserSchema
