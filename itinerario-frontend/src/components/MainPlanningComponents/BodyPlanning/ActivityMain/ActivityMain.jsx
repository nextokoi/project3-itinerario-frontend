import { Box, Typography } from '@mui/material'
import ActivityCard from '../../../GenericComponents/ActivityCard/ActivityCard'
import './ActivityMain.css'
import ActivitySelectedCard from '../../../GenericComponents/ActivitySelectedCard/ActivitySelectedCard'
import InfoMessage from '../../../GenericComponents/InfoMessage/InfoMessage'
import { useEffect, useState, useContext } from 'react'
import { getAllActivities } from '../../../../services/activitiesService'
import { mainContext } from '../../../../contexts/mainContext'


function ActivityMain() {

    const [activities, setActivities] = useState([])
    const [selectedActivities, setSelectedActivities] = useState([])

    const { mainData, setMainData } = useContext(mainContext)

    useEffect(() => {
        const fetchActivities = async () => {
            const data = await getAllActivities()
            setActivities(data)
        }
        fetchActivities()
    }, [])

    const handleCardClick = (activity) => {
        if (selectedActivities.length !== mainData.days) {
            setSelectedActivities([...selectedActivities, activity])
            setMainData(prevData => ({
                ...prevData,
                activities: [...selectedActivities, activity]
            }))
        }
    }

    const handleDeleteClick = (activity) => {
        let arrAux = [...selectedActivities]
        let result = selectedActivities.findIndex((elem) => {
            return elem.id === activity.id
        })
        arrAux.splice(result, 1)
        setSelectedActivities([...arrAux])
        setMainData(prev => ({
            ...prev,
            activities: [...arrAux]
        }))
    }

    const renderActivities = () => {
        return activities.map((activity, index) => {
            return (
                <ActivityCard key={index}
                    activityData={activity}
                    clickHandle={handleCardClick}
                />
            )
        })
    }

    const renderSelectedActivities = () => {
        if (selectedActivities.length !== 0) {
            return selectedActivities.map((activity, index) => {
                return (
                    <Box key={index}>
                        <Typography variant="h6">{`Day ${index + 1}`}</Typography>
                        <ActivitySelectedCard
                            activityData={activity}
                            clickHandle={handleDeleteClick}
                        />
                    </Box>
                )
            })
        } else {
            return <Typography variant='body1'>You haven&apos;t selected any activity yet.</Typography>
        }

    }

    return (
        <Box sx={{ px: 10, my: 5 }}>
            <Typography variant="h3" sx={{ mb: 5 }}>Keep moving</Typography>
            <InfoMessage />
            <Typography variant='body1' sx={{ mb: 2 }}>We recommend these experiences for your trip</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', mb: 5 }}>

                {renderActivities()}

            </Box>
            <Box sx={{ mb: 5 }}>

                {renderSelectedActivities()}

            </Box>
        </Box>
    )
}





export default ActivityMain