import { EMAIL_PATTERN, LENGTH_WARNING } from '@/constant/auth'
import type { UseFormGetValues } from 'react-hook-form'

const getRules = (getValues?: UseFormGetValues<any>) => ({
    email: {
        pattern: {
            value: EMAIL_PATTERN,
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
    username: {
        maxLength: {
            value: 6,
            message: LENGTH_WARNING,
        },
        minLength: {
            value: 6,
            message: LENGTH_WARNING,
        },
    },
    fullname: {
        maxLength: {
            value: 6,
            message: LENGTH_WARNING,
        },
        minLength: {
            value: 6,
            message: LENGTH_WARNING,
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
