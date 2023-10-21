import { authentication } from '.'

export const STAFF_LOGIN_API = `${process.env.NEXT_PUBLIC_DEV_API}${authentication}staff/login`
