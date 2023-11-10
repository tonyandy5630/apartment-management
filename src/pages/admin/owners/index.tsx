import { getAllOwners } from '@/apis/owner.api'
import AdminLayout from '@/components/Layout/Admin'
import { Owner } from '@/types/owner.type'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import Table from '@/components/Table'
import { Typography } from '@mui/material'

const createData = (
    ownerId: number,
    code: string,
    ownerName: string,
    ownerEmail?: string,
    ownerPhone?: string,
    ownerAddress?: string
) => {
    return {
        id: ownerId,
        code,
        ownerName,
        ownerEmail,
        ownerPhone,
        ownerAddress,
    }
}

export default function CustomerAdmin() {
    const [rows, setRows] = useState<any>([])

    const request = useQuery({
        queryKey: ['get-all-owners'],
        queryFn: getAllOwners,
    })

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70, hideable: true },
        { field: 'code', headerName: 'Owner Code', width: 100 },
        {
            field: 'ownerName',
            headerName: 'Name',
            width: 200,
        },
        { field: 'ownerEmail', headerName: 'Email', width: 200 },

        {
            field: 'ownerPhone',
            headerName: 'Phone',
            width: 200,
        },
        {
            field: 'ownerAddress',
            headerName: 'Address',
            width: 400,
        },
    ]

    useEffect(() => {
        if (request.isSuccess) {
            const customer = request.data.data.data
            if (customer) {
                const newRows: GridRowsProp = customer.map((item) => {
                    return createData(
                        item.ownerId,
                        item.code,
                        item.ownerName,
                        item.ownerEmail,
                        item.ownerPhone,
                        item.ownerAddress
                    )
                })
                setRows(Array.from(newRows) as any[])
            } else {
                setRows([])
            }
        }
    }, [request.status])

    return (
        <AdminLayout title="Customers">
            {rows ? (
                <Table rows={rows} columns={columns} />
            ) : (
                <Typography>Loading</Typography>
            )}
        </AdminLayout>
    )
}
