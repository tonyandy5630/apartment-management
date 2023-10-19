import { RequestStatus } from '@/types/request.type'
import { object, string, InferType, date, ref, number, mixed } from 'yup'

const requestLogSchema = object({
    task: number().required(),
    maintainItem: string(),
    image: string(),
    description: string(),
    status: mixed<RequestStatus>().oneOf(['Done', 'Pending', 'Working']),
})

export type RequestLogSchemaType = InferType<typeof requestLogSchema>
export default requestLogSchema
