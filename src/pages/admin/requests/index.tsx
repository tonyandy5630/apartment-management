import { getRequests } from '@/apis/request.api'
import AdminLayout from '@/components/Layout/Admin'
import { REQUEST_STATUS } from '@/constant/request.constant'
import { demoRows } from '@/utils/demoData'
import {
    GridActionsCellItem,
    GridColDef,
    GridRowId,
    GridRowModes,
    GridRowsProp,
} from '@mui/x-data-grid'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import Table from '@/components/Table'
import { createData } from '@/pages/staff/requests'

export default function RequestAdmin() {
    const [rows, setRows] = useState<any>(demoRows)
    const [isError, setIsError] = useState(false)

    const requests = useQuery({
        queryKey: ['get-all-requests'],
        queryFn: getRequests,
    })

    useEffect(() => {
        if (requests.status === 'success') {
            const request = requests.data.data
            const { data: list } = request
            if (list) {
                const newRows: GridRowsProp = list.map((item) => {
                    return createData(
                        item.requestId,
                        item.apartmentId,
                        item.packageRequestedId,
                        item.ownerId,
                        item.description,
                        item.apartmentName,
                        item.owner,
                        item.bookDateTime,
                        item.endDateTime,
                        item.packageName,
                        item.reqStatus,
                        item.numberOfAddOns
                    )
                })
                setRows(Array.from(newRows) as any[])
            } else {
                setRows([])
            }
        }
        if (requests.status === 'error') {
            setIsError(true)
        }
    }, [requests.status])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70, hideable: true },
        { field: 'apartmentName', headerName: 'Apartment Name', width: 220 },
        {
            field: 'owner',
            headerName: 'Owner',
            width: 200,
        },
        { field: 'bookingDate', headerName: 'Book date', width: 100 },
        { field: 'endDate', headerName: 'End date', width: 100 },

        {
            field: 'packageRequested',
            headerName: 'Package Request',
            width: 200,
        },
        {
            field: 'numberOfAddOnServices',
            headerName: 'Add-on Services',
            width: 130,
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 130,
            editable: true,
            type: 'singleSelect',
            valueOptions: [
                REQUEST_STATUS.Pending.status.toUpperCase(),
                REQUEST_STATUS.Working.status.toUpperCase(),
                REQUEST_STATUS.Done.status.toUpperCase(),
            ],
        },
    ]

    return (
        <AdminLayout title="Requests">
            <Table rows={rows} columns={columns} />
        </AdminLayout>
    )
}
