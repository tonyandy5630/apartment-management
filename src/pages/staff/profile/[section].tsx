// import ProfileSection from '@/components/ProfileSection/Profile'

import ChangePasswordSection from '@/components/ProfileSection/ChangePassword'
import dynamic from 'next/dynamic'
const ProfileSection = dynamic(
    () => import('@/components/ProfileSection/Profile')
)
import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export default function ProfileSectionPage({}: Props) {
    const router = useRouter()
    const { section } = router.query
    if (section === 'change-password') {
        return <ChangePasswordSection />
    } else if (section === 'profile') {
        return <ProfileSection />
    }
    return <></>
}
