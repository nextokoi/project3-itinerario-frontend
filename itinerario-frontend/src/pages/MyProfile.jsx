import React from 'react'
import { Box } from '@mui/material'
import { getOwnProfile } from '../services/userService'
import { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import MyItineraries from '../components/GenericComponents/MyItineraries/MyItineraries'

export default function Profile() {

    const [profileData, setProfileData] = useState({})

    useEffect(() => {

        const fetchData = async () => {

            const data = await getOwnProfile()
            console.log(data)
            setProfileData(data)

        }

        fetchData()

    }, [])


    return (


        < Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >


            <Typography variant='h4'>Welcome Back {profileData.username}</Typography>
            <Typography variant='h6'>Role: {profileData.role}</Typography>

            <Typography>This is your itinerary list: ______  </Typography>

            <MyItineraries></MyItineraries>


        </Box >

    )
}

