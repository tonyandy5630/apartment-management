import { getAllApartment } from '@/apis/apartment'
import AdminLayout from '@/components/Layout/Admin'
import { DateToString } from '@/utils/dayjs'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import Table from '@/components/Table'

export default function ApartmentAdmin() {
    const [rows, setRows] = useState<any>([])

    const request = useQuery({
        queryKey: ['get-all-apartments'],
        queryFn: getAllApartment,
    })

    useEffect(() => {
        if (request.isSuccess) {
            const apartments = request.data.data.data
            if (apartments) {
                const newRows: GridRowsProp = apartments.map((item) => {
                    return {
                        id: item.apartmentId,
                        apartmentTypeId: item.apartmentTypeId,
                        apTypeName: item.apTypeName,
                        buildingId: item.buildingId,
                        buildingName: item.buildingName,
                        buildingAddress: item.buildingAddress,
                        ownerName: item.ownerName,
                        fromDate: DateToString(item.fromDate),
                        toDate: DateToString(item.toDate),
                        apartmentStatus: item.apartmentStatus,
                    }
                })
                setRows(Array.from(newRows) as any[])
            } else {
                setRows([])
            }
        }
    }, [request.status])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70, hideable: true },
        { field: 'apTypeName', headerName: 'Apartment Type', width: 220 },
        { field: 'buildingName', headerName: 'Building Name', width: 200 },
        {
            field: 'packageDescription',
            headerName: 'Description',
            width: 200,
        },
        {
            field: 'ownerName',
            headerName: 'Owner',
            width: 200,
        },
        {
            field: 'fromDate',
            headerName: 'Rent Date',
            width: 100,
        },
        {
            field: 'toDate',
            headerName: 'End Date',
            width: 100,
        },
        {
            field: 'apartmentStatus',
            headerName: 'Status',
            width: 100,
        },
    ]

    return (
        <AdminLayout title="Apartment">
            <Table rows={rows} columns={columns} />
        </AdminLayout>
    )
}
