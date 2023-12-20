import { Box, Container, Typography } from '@mui/material'
import ActivityCard from '../../../GenericComponents/ActivityCard/ActivityCard'
import './LodgingMain.css'
import ActivitySelectedCard from '../../../GenericComponents/ActivitySelectedCard/ActivitySelectedCard'
import InfoMessage from '../../../GenericComponents/InfoMessage/InfoMessage'
import { getAllActivities } from '../../../../services/activitiesService'
import { useEffect, useState, useContext } from 'react'
import { mainContext } from '../../../../contexts/mainContext'

function LodgingMain() {

    const [lodgings, setLodgings] = useState([])
    const [selectedLodgings, setSelectedLodgings] = useState([])

    const { mainData, setMainData } = useContext(mainContext)

    useEffect(() => {
        const fetchLodgings = async () => {
            const data = await getAllActivities()
            setLodgings(data)
        }
        fetchLodgings()
    }, [])

    const handleCardClick = async (lodging) => {
        if (selectedLodgings.length !== mainData.days) {
            setSelectedLodgings([...selectedLodgings, lodging])
            setMainData(prevData => ({
                ...prevData,
                lodging: [...selectedLodgings, lodging]
            }))
        }
    }

    const handleDeleteClick = (lodging) => {
        let arrAux = [...selectedLodgings]
        let result = selectedLodgings.findIndex((elem) => {
            return elem.id === lodging.id
        })
        arrAux.splice(result, 1)
        setSelectedLodgings([...arrAux])
        setMainData(prev => ({
            ...prev,
            lodging: [...arrAux]
        }))
    }

    const renderLodgings = () => {
        return lodgings.filter((lodging) => lodging.isActivity === false)
            .map((lodging, index) => {
                return (
                    <ActivityCard key={index}
                        activityImg={lodging.imageURL}
                        activityData={lodging}
                        clickHandle={handleCardClick}
                    />
                )
            })
    }

    const renderSelectedLodgings = () => {
        if (selectedLodgings.length !== 0) {
            return selectedLodgings.map((lodging, index) => {
                return (
                    <Box key={index}>
                        <Typography variant="h6">{`Day ${index + 1}`}</Typography>
                        <ActivitySelectedCard
                            activityImg={lodging.imageURL}
                            activityData={lodging}
                            clickHandle={handleDeleteClick}
                        />
                    </Box>
                )
            })
        } else {
            return <Typography variant='body1'>You haven&apos;t selected any lodging yet.</Typography>
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

                {renderLodgings()}

            </Container>
            <Container sx={{ my: 3 }}>

                {renderSelectedLodgings()}

            </Container>
        </Box>
    )
}

export default LodgingMain