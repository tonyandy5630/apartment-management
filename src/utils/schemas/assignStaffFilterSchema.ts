import { object, string, InferType } from 'yup'

const AssignStaffFilterSchema = object({
    numberOfWorkingRequest: string().matches(/(asc|desc)/, 'Not a valid value'),
})

export type AssignStaffFilterSchemaType = InferType<
    typeof AssignStaffFilterSchema
>
export default AssignStaffFilterSchema
