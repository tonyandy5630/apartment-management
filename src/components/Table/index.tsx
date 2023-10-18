import * as React from 'react'
import Request, { RequestStatus } from '@/types/request'
import {
    DataGrid,
    GridColDef,
    GridEventListener,
    GridValueGetterParams,
} from '@mui/x-data-grid'
import { useRouter } from 'next/router'

export type TableHeader = {
    name: string
}

type Props = {
    rows: Array<any>
    columns: GridColDef[]
}

export default function BasicTable({ rows, columns }: Props) {
    const router = useRouter()

    const handleRowDlClick: GridEventListener<'rowDoubleClick'> = (params) => {
        router.push(`/staff/requests/${params.row.id}`)
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                onRowDoubleClick={handleRowDlClick}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                // checkboxSelection
            />
        </div>
    )
}
