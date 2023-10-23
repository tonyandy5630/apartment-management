import StaffLayout from '@/components/Layout/Staff'
import MyTabPanel from '@/components/TabPanel'
import { Avatar, Box, Stack, Tab, Tabs, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import React from 'react'
import { useRouter } from 'next/router'
import ProfileSectionPage from './[section]'
import { notFound } from 'next/navigation'

const AVATAR_SIZE = 150

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    }
}

const PROFILE_SECTIONS: {
    value: number
    section: 'profile' | 'change-password'
}[] = [
    {
        value: 0,
        section: 'profile',
    },
    {
        value: 1,
        section: 'change-password',
    },
]

export default function StaffProfilePage() {
    const [value, setValue] = React.useState(PROFILE_SECTIONS[0].value)
    const router = useRouter()
    const { section } = router.query

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(PROFILE_SECTIONS[newValue].value)
        router.push(
            {
                pathname: '/staff/profile',
                query: {
                    section: PROFILE_SECTIONS[newValue].section,
                },
            },
            undefined,
            {
                shallow: true,
            }
        )
    }

    if (!PROFILE_SECTIONS.find((item) => item.section === section)) {
        notFound()
    }

    return (
        <StaffLayout title="Profile">
            <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
                height="90%"
                gap={3}
            >
                <Grid
                    xs={3}
                    sx={{
                        border: '1px solid black',
                        height: '100%',
                        borderRadius: '3px',
                    }}
                >
                    <aside>
                        <Stack
                            width="100%"
                            height="100%"
                            justifyContent="flex-start"
                            alignItems="center"
                        >
                            <Stack
                                justifyContent="center"
                                alignItems="center"
                                width="100%"
                                height="30%"
                                padding="30px"
                                sx={{ borderBottom: '1px solid black' }}
                            >
                                <Avatar
                                    sx={{
                                        width: AVATAR_SIZE,
                                        height: AVATAR_SIZE,
                                    }}
                                />
                            </Stack>
                            <Tabs
                                orientation="vertical"
                                variant="fullWidth"
                                value={value}
                                onChange={handleChange}
                                aria-label="Profile tabs"
                                TabIndicatorProps={{
                                    sx: {
                                        width: '10px !important',
                                    },
                                }}
                                sx={{
                                    borderColor: 'divider',
                                    width: '100%',
                                }}
                            >
                                <Tab
                                    label="Profile"
                                    {...a11yProps(PROFILE_SECTIONS[0].value)}
                                />
                                <Tab
                                    label="Change Password"
                                    {...a11yProps(PROFILE_SECTIONS[1].value)}
                                />
                            </Tabs>
                        </Stack>
                    </aside>
                </Grid>
                <Grid
                    xs={7}
                    sx={{
                        border: '1px solid black',
                        minHeight: '100%',
                        maxHeight: '100%',
                        borderRadius: '3px',
                        padding: '10px 20px',
                    }}
                >
                    <MyTabPanel value={value} index={PROFILE_SECTIONS[0].value}>
                        <ProfileSectionPage />
                    </MyTabPanel>
                    <MyTabPanel value={value} index={PROFILE_SECTIONS[1].value}>
                        <ProfileSectionPage />
                    </MyTabPanel>
                </Grid>
            </Grid>
        </StaffLayout>
    )
}

export const getServerSideProps = async (context: any) => {
    const pageData = PROFILE_SECTIONS.find(
        (item) => item.section === context.query.section
    )
    if (!pageData) {
        return {
            notFound: true,
        }
    }
    return {
        props: { pageData },
    }
}
