import React from 'react'
import RequestInfoTitle from '../RequestInfo/Title'
import RequestInfoDetail from '../RequestInfo/Detail'
import Grid from '@mui/material/Unstable_Grid2'
import AddOnService from '@/types/add-on-services.type'
import { Skeleton } from '@mui/material'

type Props = {
    title: string
    content?: string | Array<AddOnService> | Array<number | string>
    xs?: number
    isLoading: boolean
}

export default function RequestDetailSection({
    title,
    content,
    xs = 5,
    isLoading,
}: Props) {
    return (
        <Grid
            xs={xs}
            sx={{ maxWidth: '240px', minWidth: xs !== 12 ? '187px' : '100%' }}
        >
            <RequestInfoTitle title={title} />
            {(() => {
                if (typeof content === 'string') {
                    return isLoading ? (
                        <Skeleton>
                            <RequestInfoDetail
                                content={'This is default content'}
                            />
                        </Skeleton>
                    ) : (
                        <RequestInfoDetail content={content} />
                    )
                } else {
                    if (content !== undefined) {
                        if (typeof content[0] === 'object') {
                            return (
                                <ul>
                                    {isLoading ? (
                                        <Skeleton>
                                            <RequestInfoDetail
                                                key={2}
                                                content={'Default content'}
                                            />
                                        </Skeleton>
                                    ) : (
                                        (content as Array<AddOnService>).map(
                                            (item) => {
                                                return (
                                                    <RequestInfoDetail
                                                        key={item.code}
                                                        content={item.name}
                                                    />
                                                )
                                            }
                                        )
                                    )}
                                </ul>
                            )
                        } else {
                            return (
                                <ul>
                                    {isLoading ? (
                                        <Skeleton>
                                            <RequestInfoDetail
                                                key={'1'}
                                                content={'Default Content'}
                                            />
                                        </Skeleton>
                                    ) : (
                                        (content as Array<string | number>).map(
                                            (item) => (
                                                <RequestInfoDetail
                                                    key={item}
                                                    content={item.toString()}
                                                />
                                            )
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
