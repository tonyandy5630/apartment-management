import * as React from 'react'
import {
    DataGrid,
    GridColDef,
    GridEditMode,
    GridEventListener,
    GridRowModel,
    GridRowModesModel,
} from '@mui/x-data-grid'
import { useRouter } from 'next/router'

export type TableHeader = {
    name: string
}

type Props = {
    rows: Array<any>
    columns: GridColDef[]
    handleRowDlClick?: GridEventListener<'rowDoubleClick'>
    rowModesModel?: GridRowModesModel
    editMode?: GridEditMode
    handleRowModesModelChange?: (newCellModesModel: GridRowModesModel) => void
    handleRowEditStop?: GridEventListener<'rowEditStop'>
    processRowUpdate?: (newRow: GridRowModel) => any
}

export default function BasicTable({
    rows,
    columns,
    handleRowDlClick,
    editMode,
    rowModesModel,
    handleRowModesModelChange,
    handleRowEditStop,
    processRowUpdate,
}: Props) {
    const router = useRouter()

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                editMode={editMode}
                columns={columns}
                onRowDoubleClick={handleRowDlClick}
                rowModesModel={rowModesModel}
                onRowModesModelChange={handleRowModesModelChange}
                onRowEditStop={handleRowEditStop}
                processRowUpdate={processRowUpdate}
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
