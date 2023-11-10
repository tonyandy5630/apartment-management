import Table from '@/components/Table'
import { getALlPackage } from '@/apis/package.api'
import AdminLayout from '@/components/Layout/Admin'
import { Package } from '@/types/package.type'
import { GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'

export default function PackageAdmin() {
    const [rows, setRows] = useState<any>([])
    const [isError, setIsError] = useState(false)

    const requests = useQuery({
        queryKey: ['get-all-packages'],
        queryFn: getALlPackage,
    })

    useEffect(() => {
        if (requests.status === 'success') {
            const list = requests.data.data.data as Array<Package>
            if (list) {
                const newRows: GridRowsProp = list.map((item) => {
                    return {
                        id: item.packageId,
                        packageName: item.packageName,
                        code: item.code,
                        apartmentTypeName: item.apartmentTypeName,
                        packagePrice: item.packagePrice,
                        packageDescription: item.packageDescription,
                    }
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
        {
            field: 'code',
            headerName: 'Code',
            width: 100,
        },
        { field: 'packageName', headerName: 'Package Name', width: 220 },
        {
            field: 'apartmentTypeName',
            headerName: 'Apartment Type',
            width: 190,
        },
        { field: 'packagePrice', headerName: 'Package Price', width: 100 },

        {
            field: 'packageDescription',
            headerName: 'Description',
            width: 200,
        },
    ]

    return (
        <AdminLayout title="Packages">
            <Table rows={rows} columns={columns} />
        </AdminLayout>
    )
}
