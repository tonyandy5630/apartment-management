import { object, string, InferType, date, ref } from 'yup'
import getRules from '../rules/request-filter'

// const rules = getRules()

const requestFilterSchema = object({
    status: string(),
    endDate: date(),
    bookDate: date(),
    apartmentType: string(),
})

export type RequestFilterSchemaType = InferType<typeof requestFilterSchema>
export default requestFilterSchema
