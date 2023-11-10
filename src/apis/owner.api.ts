import http from '@/utils/http'
import { ErrorResponse, ResponseAPI } from '@/types'
import { Owner } from '@/types/owner.type'
import { GET_OWNERS } from '@/constant/api-url/owner'

export const getAllOwners = () =>
    http.get<ErrorResponse<Array<Owner>>>(GET_OWNERS)
