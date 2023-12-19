import { Box, Container } from '@mui/material'
import { getOwnProfile } from '../services/userService'
import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import imageProfile from '../../public/photos/profile.svg'
import BasicBreadcrumbs from '../components/GenericComponents/BreadCrumbs/BreadCrumbs'
import { getOwnTravelPlannings } from '../services/travelPlanningService'
import ProfileCard from '../components/GenericComponents/ProfileCard/ProfileCard'

export default function Profile() {
    const [profileData, setProfileData] = useState({})
    const [travelPlaningData, setTravelPlaningData] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await getOwnProfile()
                console.log(data)
                setProfileData(data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()

    }, [])

    // nos traemos la información del usuario
    // y nos traemos la informacion de los travel plannings del usuario

    
    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await getOwnProfile()
                console.log(data)
                setProfileData(data)
            } catch (error) {
                console.log(error)
            }
        }
        const fetchTravelPlanningData = async () => {
            try {
                const dataTP = await getOwnTravelPlannings()
                setTravelPlaningData(dataTP)
            } catch (error) {
                console.log(error)
            }

        }
        fetchData()
        fetchTravelPlanningData()

    }, [])

    useEffect(() => {
        console.log(travelPlaningData)
    }, [travelPlaningData])

    const renderTravelPlanningList = () => {
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
            <Box sx={{ mt: 5}}>
                <Typography variant='h5' sx={{ mt: 5 }}>Here you can view your saved itineraries</Typography>
                <Box sx={{display: 'flex', justifyContent: 'center', my: 5 }}>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                        {renderTravelPlanningList()}
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

