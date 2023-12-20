import { Box, Container, Typography } from '@mui/material'
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
        return activities.filter((activity) => activity.isActivity === true)
            .map((activity, index) => {
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
                        <Typography variant="h6" sx={{mb: 2}}>{`Day ${index + 1}`}</Typography>
                        <ActivitySelectedCard
                            activityImg={activity.imageURL}
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
        <Box sx={{ my: 5, display: 'flex', flexDirection: 'column' }}>
            <Container sx={{mb: 7, display: 'flex', flexDirection: 'column', gap: 7}}>
                <Typography variant="h3">Keep moving</Typography>
                <InfoMessage />
                <Typography variant='body1'>We recommend these experiences for your trip</Typography>
            </Container>
            <Container sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', mb: 5 }}>

                {renderActivities()}

            </Container>
            <Container sx={{ my: 3 }}>

                {renderSelectedActivities()}

            </Container>
        </Box>
    )
}





export default ActivityMain