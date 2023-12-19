import React from 'react'
import { Box } from '@mui/material'
import { getOwnProfile } from '../services/userService'
import { getOwnTravelPlannings } from '../services/travelPlanningService'
import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { getOneFlight } from '../services/flightInternalService'


export default function Profile() {

    const [profileData, setProfileData] = useState({})
    const [travelPlaningData, setTravelPlaningData] = useState({})
    const [flightData, setFlightData] = useState({})


    // const { flightId } = useParams();

    // const [flightGoingId, setFlightGoingId] = useState(0)
    // const [flightBackId, setFlightBackId] = useState(0)

    // nos traemos la información del usuario
    // y nos traemos la informacion de los travel plannings del usuario

    useEffect(() => {

        const fetchData = async () => {

            const data = await getOwnProfile()
            console.log(data)
            setProfileData(data)

        }
        const fetchTravelPlanningData = async () => {

            const dataTP = await getOwnTravelPlannings()
            setTravelPlaningData(dataTP)
        }

        fetchTravelPlanningData()
        fetchData()

    }, [])

    useEffect(() => {
        const fetchData = async () => {

            const data = await getOneFlight(1)
            console.log(data)
            setFlightData(data)

        }
        fetchData()

    }, [])

    useEffect(() => {

        console.log("hello", travelPlaningData)

    }, [travelPlaningData])


    useEffect(() => {

        console.log("flightData", flightData)

    }, [flightData])

    const renderPlannings = () => {




    }


    return (


        < Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >

            <Typography variant='h4'>Welcome Back {profileData.username}</Typography>
            <Typography variant='h6'>Role: {profileData.role}</Typography>
            <Typography>This is your itinerary list: ______  </Typography>

            <Box>

                {renderPlannings()}

            </Box>


        </Box >

    )
}

