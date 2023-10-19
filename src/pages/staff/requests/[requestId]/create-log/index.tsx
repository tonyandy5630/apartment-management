import { useRouter } from 'next/router'
import React from 'react'

export default function CreateLogForRequestDetail() {
    const router = useRouter()
    const { requestId } = router.query
    return <div>{requestId}</div>
}
