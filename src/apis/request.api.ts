import http from '@/utils/http'
import { ErrorResponse, ResponseAPI } from '@/types'

export const getRequest = () =>
    http.get<ErrorResponse<Request>>(GET_REQUESTS_API)
