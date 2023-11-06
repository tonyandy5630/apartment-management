import { REQUEST_STATUS } from '@/constant/request.constant'

export type RequestStatusID =
    | typeof REQUEST_STATUS.Pending.id
    | typeof REQUEST_STATUS.Working.id
    | typeof REQUEST_STATUS.Done.id

export type RequestStatus =
    | typeof REQUEST_STATUS.Pending.status
    | typeof REQUEST_STATUS.Working.status
    | typeof REQUEST_STATUS.Done.status
