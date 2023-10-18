import dayjs from 'dayjs'

export const DateToString = (date: Date) =>
    dayjs(date.toString()).format('DD/MM/YYYY')
