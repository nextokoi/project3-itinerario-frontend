import { Box, Container } from '@mui/material'
import { getOwnProfile } from '../services/userService'
import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import imageProfile from '../assets/photos/profile.svg'
import BasicBreadcrumbs from '../components/GenericComponents/BreadCrumbs/BreadCrumbs'
import { getOwnTravelPlannings } from '../services/travelPlanningService'
import ProfileCard from '../components/GenericComponents/ProfileCard/ProfileCard'
import CircularIndeterminate from '../components/GenericComponents/CircularIndeterminate/CircularIndeterminate'

export default function Profile() {
    const [profileData, setProfileData] = useState({})
    const [travelPlaningData, setTravelPlaningData] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {

        const fetchDataAndTravelPlanning = async () => {
            try {
                const data = await getOwnProfile()
                console.log(data)
                setProfileData(data)

                const dataTP = await getOwnTravelPlannings()
                setTravelPlaningData(dataTP)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        
        fetchDataAndTravelPlanning()

    }, [])

    useEffect(() => {
        console.log(travelPlaningData)
    }, [travelPlaningData])

    const renderTravelPlanningList = () => {
        if(loading){
            return <CircularIndeterminate />
        }

        if (travelPlaningData.length === 0){
            return <Typography variant='body1'>You don&apos;t have itineraries yet</Typography>  
        }
        
        return travelPlaningData.map((plan) => {
            return (
                <ProfileCard
                    key={plan.id}
                    data={plan}
                />
            )
        })
    }

    return (
        <Container sx={{ my: 5 }}>
            <Box sx={{ mb: 3 }}>
                <BasicBreadcrumbs />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'end', gap: '20px'}}>
                <Typography variant='h5'>Welcome back, {profileData.username}!</Typography>
                <Box component="img" src={imageProfile} sx={{height: '300px'}}/>
            </Box >
            <Box sx={{ my: 10}}>
                <Container>
                    <Typography variant='h5' sx={{ mt: 5 }}>Here you can view your saved itineraries</Typography>
                </Container>
                <Container sx={{ display: 'flex', my: 5 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {renderTravelPlanningList()}
                    </Box>
                </Container>
            </Box>
        </Container>
    )
}

