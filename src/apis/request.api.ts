import http from '@/utils/http'
import { ErrorResponse, ResponseAPI } from '@/types'
import {
    GET_PENDING_REQUEST_API,
    GET_REQUESTS_API,
} from '@/constant/api-url/request'
import Request from '@/types/request.type'
import RequestLog from '@/types/request-log.type'
import { ASSIGN_STAFF_API } from '@/constant/api-url/request-log'

export const getRequests = () =>
    http.get<ErrorResponse<Array<Request>>>(GET_PENDING_REQUEST_API)

export const assignStaffToRequest = (body: {
    requestId: number
    staffId: number
}) => http.post<ErrorResponse<RequestLog>>(ASSIGN_STAFF_API, body)
