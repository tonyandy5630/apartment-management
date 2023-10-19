import * as React from 'react'
import Request, { RequestStatus } from '@/types/request.type'
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
    handleRowDlClick?: GridEventListener<'rowDoubleClick'>
}

export default function BasicTable({ rows, columns, handleRowDlClick }: Props) {
    const router = useRouter()

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
