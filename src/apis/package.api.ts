import http from '@/utils/http'
import { ErrorResponse, ResponseAPI } from '@/types'
import { Package } from '@/types/package.type'
import { GET_ALL_PACKAGES } from '@/constant/api-url/package'

export const getALlPackage = () =>
    http.get<ErrorResponse<Array<Package>>>(GET_ALL_PACKAGES)
