import {
    EMAIL_REGEX,
    LENGTH_WARNING,
    PHONE_LENGTH_WARNING,
} from '@/constant/auth.constant'
import type { UseFormGetValues } from 'react-hook-form'

const getRules = (getValues?: UseFormGetValues<any>) => ({
    email: {
        pattern: {
            value: EMAIL_REGEX,
            message: `Not a valid email format`,
        },
        minLength: {
            value: 6,
            message: LENGTH_WARNING,
        },
        maxLength: {
            value: 20,
            message: LENGTH_WARNING,
        },
    },
    name: {
        maxLength: {
            value: 20,
            message: LENGTH_WARNING,
        },
        minLength: {
            value: 6,
            message: LENGTH_WARNING,
        },
    },
    phone: {
        minLength: {
            value: 10,
            message: PHONE_LENGTH_WARNING,
        },
        maxLength: {
            value: 13,
            message: PHONE_LENGTH_WARNING,
        },
    },
    pwd: {
        minLength: {
            value: 6,
            message: LENGTH_WARNING,
        },
        maxLength: {
            value: 20,
            message: LENGTH_WARNING,
        },
    },
    rePwd: {
        validate:
            typeof getValues === 'function'
                ? (value: string) =>
                      value === getValues('pwd') ||
                      'Confirm password not matched'
                : undefined,
    },
})

export default getRules
