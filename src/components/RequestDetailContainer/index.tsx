import Request from '@/types/request.type'
import dynamic from 'next/dynamic'
import React from 'react'
const RequestDetailSection = dynamic(() => import('./Section'))
import { DateToString } from '@/utils/dayjs'
import Grid from '@mui/material/Unstable_Grid2'
import AddOnService from '@/types/add-on-services.type'

type Props = {
    size?: 'large' | 'small'
    isRequestDetail?: boolean
    isAddOnDetail?: boolean
    request?: Request
    addOnServices?: Array<AddOnService>
}

const AddOnService = ['Add-on Services', 'Price']

export default function RequestDetailContainer({
    size,
    request,
    addOnServices,
    isRequestDetail,
    isAddOnDetail,
}: Props) {
    const addOnPrices = (addOnServices?: Array<AddOnService>) => {
        if (addOnServices) {
            return addOnServices.map((item) => item.price.toString())
        }
        return undefined
    }

    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="start"
            flexWrap="wrap"
            className={`py-1 px-6 h-72 ${
                size === 'large' ? 'w-3/5 max-w-3xl' : 'w-2/5 items-start'
            } rounded-sm bg-transparent border border-black`}
            rowGap={2}
            columnGap={3}
        >
            {(() => {
                if (isRequestDetail) {
                    return (
                        <>
                            <RequestDetailSection
                                title="Package Requested"
                                content={request?.rdDetail.packageRequested}
                            />
                            <RequestDetailSection
                                title="Package Price"
                                content={`${request?.rdDetail.packagePrice.toString()}$`}
                            />
                            <RequestDetailSection
                                title="Book Date"
                                content={DateToString(
                                    request?.rdDetail.bookingDate
                                )}
                            />
                            <RequestDetailSection
                                title="End Date"
                                content={DateToString(
                                    request?.rdDetail.endDate
                                )}
                            />
                            <RequestDetailSection
                                title="Description"
                                xs={12}
                                content={
                                    request?.requestDescription
                                        ? request.requestDescription
                                        : ''
                                }
                            />
                        </>
                    )
                }

                if (isAddOnDetail) {
                    return (
                        <>
                            <RequestDetailSection
                                title="Add-on Services"
                                content={addOnServices}
                            />
                            <RequestDetailSection
                                title="Price"
                                content={addOnPrices(addOnServices)}
                            />
                        </>
                    )
                }
            })()}
        </Grid>
    )
}
