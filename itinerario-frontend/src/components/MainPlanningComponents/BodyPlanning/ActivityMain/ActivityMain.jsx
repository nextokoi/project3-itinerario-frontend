import { Box, Divider, Typography } from '@mui/material'
import ActivityCard from '../../../GenericComponents/ActivityCard/ActivityCard'
import './ActivityMain.css'
import ActivitySelectedCard from '../../../GenericComponents/ActivitySelectedCard/ActivitySelectedCard'
import ButtonNavigation from './../../../GenericComponents/ButtonNavigation/ButtonNavigation'
import InfoMessage from '../../../GenericComponents/InfoMessage/InfoMessage'
import { useEffect, useState,useContext } from 'react'
import { getAllActivities } from '../../../../services/activitiesService'
import { mainContext } from '../../../../contexts/mainContext'


function ActivityMain() {

    const [activities, setActivities] = useState([])
    const [selectedActivities, setSelectedActivities] = useState([])
    const [numberOfDays,setNumberOfDays] = useState()

    const {mainData,setMainData} = useContext(mainContext)

    useEffect(()=>{
        setNumberOfDays(calcularDiferenciaEnDias(mainData.dateGoing,mainData.dateBack))
    },[])


    useEffect(()=>{
        setMainData((prevData) => ({
            ...prevData,
            days: numberOfDays
        }))
    },[numberOfDays])

    
    
    //  useEffect(()=>{
    //      console.log(selectedActivities)
    //  },[selectedActivities])

    useEffect(() => {

        const fetchActivities = async () => {
            const data = await getAllActivities()
            // console.log("Estas son las actividades: ", data)
            setActivities(data)
        }
        fetchActivities()
    }, [])

    const handleCardClick = async (activity) => {
        console.log(mainData)
        if(selectedActivities.length >= numberOfDays){

        }else{
        await setSelectedActivities(
            [
                ...selectedActivities,
                activity
            ]
        )
    }
    }

    const handleDeleteClick = (activity) => {
       let arrAux = [...selectedActivities]
       let result = selectedActivities.findIndex((elem)=>{
        return elem.id === activity.id
       })
       arrAux.splice(result,1)
       setSelectedActivities(
        [
            ...arrAux
        ]
    )
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

        return selectedActivities.map((activity, index) => {
            if(index>=numberOfDays) return (<></>)


            return (<>

                <Divider/>
                <ActivitySelectedCard key={index}

                    activityData={activity}
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

function calcularDiferenciaEnDias(fecha1, fecha2) {
    // Convierte las fechas a objetos Date
    const fechaInicio = new Date(fecha1);
    const fechaFin = new Date(fecha2);

    // Calcula la diferencia en milisegundos
    const diferenciaEnMilisegundos = fechaFin - fechaInicio;

    // Convierte la diferencia a días
    const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);

    // Redondea el resultado a un número entero
    return Math.round(diferenciaEnDias);
}


export default ActivityMain