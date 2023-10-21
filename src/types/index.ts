export type ResponseAPI<Data> = {
    message?: string
    data?: Data
}

export type SuccessResponse<Data> = {
    message?: string
    data: Data
}

export type LoginResponse<Data> = {
    message?: string
    data: Data
    token: string
    success: boolean
}

export type ErrorResponse<Data> = {
    message?: string
    data?: Data
}
