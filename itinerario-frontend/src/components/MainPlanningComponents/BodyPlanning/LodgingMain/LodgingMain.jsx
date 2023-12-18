import { Box, Divider, Typography } from '@mui/material'
import ActivityCard from '../../../GenericComponents/ActivityCard/ActivityCard'
import './LodgingMain.css'
import ActivitySelectedCard from '../../../GenericComponents/ActivitySelectedCard/ActivitySelectedCard'
import ButtonNavigation from './../../../GenericComponents/ButtonNavigation/ButtonNavigation'
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
        return lodgings.map((lodging, index) => {
            return (
                <ActivityCard key={index}
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
        <Box sx={{ px: 10, my: 5 }}>
            <Typography variant="h3" sx={{ mb: 5 }}>Choose Lodging</Typography>
            <InfoMessage />
            <Typography variant='body1' sx={{ mb: 2 }}>We recommend these lodgings for your trip</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', mb: 5 }}>

                {renderLodgings()}

            </Box>
            <Box sx={{ mb: 5 }}>

                {renderSelectedLodgings()}

            </Box>
        </Box>
    )
}

export default LodgingMain