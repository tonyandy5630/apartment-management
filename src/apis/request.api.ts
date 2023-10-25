import http from '@/utils/http'
import { ErrorResponse, ResponseAPI } from '@/types'
import { GET_REQUESTS_API } from '@/constant/api-url/request'
import Request from '@/types/request.type'

export const getRequests = () =>
    http.get<ErrorResponse<Array<Request>>>(GET_REQUESTS_API)
