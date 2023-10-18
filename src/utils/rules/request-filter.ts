import dayjs from 'dayjs'
import type { UseFormGetValues } from 'react-hook-form'

const getRules = (getValues?: UseFormGetValues<any>) => ({
    // bookDate: {
    //     test: (value: string, endDate: string) => {
    //         if (endDate) {
    //             const endDateJS = dayjs(endDate)
    //             const date = dayjs(value)
    //             return date.isBefore(endDateJS)
    //         }
    //     },
    // },
    // endDate: {
    //     test: (value: string, bookDate: string) => {
    //         if (bookDate) {
    //             const bookDateJS = dayjs(bookDate)
    //             const date = dayjs(value)
    //             return date.isAfter(bookDateJS)
    //         }
    //     },
    // },
})

export default getRules
