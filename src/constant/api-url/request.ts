import { REQUEST } from '.'
import { REQUEST_STATUS } from '../request.constant'

export const GET_REQUESTS_API = `${REQUEST}`

export const GET_PENDING_REQUEST_API = `${REQUEST}/status/${REQUEST_STATUS.Pending.status.toUpperCase()}`
