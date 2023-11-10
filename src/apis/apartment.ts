import http from '@/utils/http'
import { ErrorResponse, ResponseAPI } from '@/types'
import { Apartment } from '@/types/apartment.type'
import { APARTMENT } from '@/constant/api-url'

export const getAllApartment = () =>
    http.get<ErrorResponse<Array<Apartment>>>(APARTMENT)
