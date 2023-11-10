import http from '@/utils/http'
import { ErrorResponse, ResponseAPI } from '@/types'
import { StaffBase } from '@/types/staff.type'
import { GET_STAFF_API } from '@/constant/api-url/staff'

export const getStaffOnly = http.get<ErrorResponse<StaffBase>>(GET_STAFF_API)
