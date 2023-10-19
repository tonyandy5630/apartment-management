import React from 'react'
import RequestInfoTitle from '../RequestInfo/Title'
import RequestInfoDetail from '../RequestInfo/Detail'
import Grid from '@mui/material/Unstable_Grid2'
import AddOnService from '@/types/add-on-services.type'

type Props = {
    title: string
    content?: string | Array<AddOnService> | Array<number | string>
    xs?: number
}

export default function RequestDetailSection({
    title,
    content,
    xs = 5,
}: Props) {
    return (
        <Grid
            xs={xs}
            sx={{ maxWidth: '240px', minWidth: xs !== 12 ? '187px' : '100%' }}
        >
            <RequestInfoTitle title={title} />
            {(() => {
                if (typeof content === 'string') {
                    return <RequestInfoDetail content={content} />
                } else {
                    if (content !== undefined) {
                        if (typeof content[0] === 'object') {
                            return (
                                <ul>
                                    {(content as Array<AddOnService>).map(
                                        (item) => {
                                            return (
                                                <RequestInfoDetail
                                                    key={item.id}
                                                    content={item.serviceName}
                                                />
                                            )
                                        }
                                    )}
                                </ul>
                            )
                        } else {
                            return (
                                <ul>
                                    {(content as Array<string | number>).map(
                                        (item) => (
                                            <RequestInfoDetail
                                                key={item}
                                                content={item.toString()}
                                            />
                                        )
                                    )}
                                </ul>
                            )
                        }
                    }
                }
            })()}
        </Grid>
    )
}
