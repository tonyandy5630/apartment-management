import { useRouter } from 'next/router'
import React from 'react'

export default function UpdateLog() {
    const router = useRouter()

    const { logid } = router.query
    return <div>{logid}</div>
}
