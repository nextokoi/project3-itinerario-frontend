import { Box, Divider, Typography } from '@mui/material'
import ActivityCard from '../../../GenericComponents/ActivityCard/ActivityCard'
import './LodgingMain.css'
import ActivitySelectedCard from '../../../GenericComponents/ActivitySelectedCard/ActivitySelectedCard'
import ButtonNavigation from './../../../GenericComponents/ButtonNavigation/ButtonNavigation'
import InfoMessage from '../../../GenericComponents/InfoMessage/InfoMessage'
import { getAllActivities } from '../../../../services/activitiesService'
import {useEffect, useState,useContext} from 'react'
import { mainContext } from '../../../../contexts/mainContext'


function LodgingMain() {

    const [lodgings,setLodgings] = useState([])
    const [selectedLodgings, setSelectedLodgings] = useState([])
    const {mainData,setMainData} = useContext(mainContext)

    useEffect(() => {
        const fetchLodgings = async () => {
            const data = await getAllActivities()
            // console.log("Estas son las actividades: ", data)
            setLodgings(data)
        }
        fetchLodgings()
    }, [])

    const handleCardClick = async (lodging) => {
        console.log(mainData)
        if(selectedLodgings.length >= mainData.days){

        }else{
        await setSelectedLodgings(
            [
                ...selectedLodgings,
                lodging
            ]
        )
    }
    }
    const handleDeleteClick = (lodging) => {
        let arrAux = [...selectedLodgings]
        let result = selectedLodgings.findIndex((elem)=>{
         return elem.id === lodging.id
        })
        arrAux.splice(result,1)
        setSelectedLodgings(
         [
             ...arrAux
         ]
     )
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
        return selectedLodgings.map((lodging, index) => {
            if(index>=mainData.days) return (<></>)
            return (<>
                <Divider/>
                <ActivitySelectedCard key={index}
                    activityData={lodging}
                    cardTitle={`Day ${index+1}`}
                    clickHandle={handleDeleteClick}
                />
                <Divider/>
            </>
            )
        })

    }

    return (
        <Box sx={{ px: 10, my: 5 }}>
            <Typography variant="h3" sx={{ mb: 5 }}>Choose Lodging</Typography>
            <InfoMessage />
            <Typography variant='body1' sx={{ mb: 2 }}>These are the most visited accomodations of the selected destination :</Typography>
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