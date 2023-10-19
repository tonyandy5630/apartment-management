import dayjs from 'dayjs'

export const DateToString = (date?: Date) =>
    date ? dayjs(date.toString()).format('DD/MM/YYYY') : ''
