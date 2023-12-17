import { Box, Typography } from '@mui/material'
import ActivityCard from '../../../GenericComponents/ActivityCard/ActivityCard'
import './ActivityMain.css'
import ActivitySelectedCard from '../../../GenericComponents/ActivitySelectedCard/ActivitySelectedCard'
import ButtonNavigation from './../../../GenericComponents/ButtonNavigation/ButtonNavigation'
import InfoMessage from '../../../GenericComponents/InfoMessage/InfoMessage'
import { useEffect, useState } from 'react'
import { getAllActivities } from '../../../../services/activitiesService'


function ActivityMain() {

    const [activities, setActivities] = useState([])
    const [selectedActivities, setSelectedActivities] = useState([])

    useEffect(() => {

        const fetchActivities = async () => {

            const data = await getAllActivities()
            // console.log("Estas son las actividades: ", data)
            setActivities(data)

        }

        fetchActivities()

    }, [])

    useEffect(() => {

        console.log("Estas son las Actividades: ", activities)

    }, [])


    const handleCardClick = (e) => {


        setSelectedActivities(
            [
                ...selectedActivities,
                e.target
            ]
        )

        console.log("cosas", selectedActivities)
        console.log(selectedActivities.length)
    }

            

    const renderActivities = () => {
        return activities.map((activity, index) => {
            return (

                <ActivityCard key={index}

                    cardImg={'./../../../../../photos/onsen.jpg'}
                    cardText={activity.name}
                    clickHandle={handleCardClick}

                />
            )
        })
    }

    useEffect(() => {

        renderSelectedActivities()

    }, [selectedActivities])

    const renderSelectedActivities = () => {

        return selectedActivities.map((activity, index) => {
            return (
                <>

                    {activity.outerHTML}

                </>
            )
        })

    }

    return (
        <Box sx={{ px: 10, my: 5 }}>
            <Typography variant="h3" sx={{ mb: 5 }}>Keep moving</Typography>
            <InfoMessage />
            <Typography variant='body1' sx={{ mb: 2 }}>We recommend these experiences for your trip</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', mb: 5 }}>

                {/* <ActivityCard cardImg={'./../../../../../photos/onsen.jpg'} cardText={'Onsen'} />
                <ActivityCard cardImg={'./../../../../../photos/shrine.jpg'} cardText={'Hakone Shrine'} />
                 */}

                {renderActivities()}

            </Box>
            <Box sx={{ mb: 5 }}>

                {/* <Box sx={{ mb: 2 }}>
                    <Typography variant="h6">Day 1</Typography>
                    <ActivitySelectedCard cardImg={'./../../../../../photos/onsen.jpg'} cardTitle={'Tenzan Tohji-kyo'} cardSubtitle={'Yumoto, Hakone'} />
                </Box>
                <Box>
                    <Typography variant="h6">Day 2</Typography>
                    <ActivitySelectedCard cardImg={'./../../../../../photos/shrine.jpg'} cardTitle={'Hakone Shrine'} cardSubtitle={'Jinja, Hakone'} />
                </Box> */}

                {renderSelectedActivities()}


            </Box>
        </Box>
    )
}

export default ActivityMain