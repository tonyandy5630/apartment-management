import http from '@/utils/http'
import { ErrorResponse, ResponseAPI } from '@/types'
import { GET_REQUEST_DETAIL_API } from '@/constant/api-url/request-detail'
import RequestDetail from '@/types/request-detail.type'

export const getRequestDetail = (id: any) =>
    http.get<ErrorResponse<RequestDetail>>(`${GET_REQUEST_DETAIL_API}/${id}`)
