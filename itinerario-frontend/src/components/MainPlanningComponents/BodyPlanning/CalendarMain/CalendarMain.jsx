import { Box, Button, TextField, Typography } from '@mui/material'
import ResponsiveDatePickers from '../../../GenericComponents/CalendarPlanning/CalendarPlanning.jsx'
import { useContext, useState, useEffect } from 'react'
import { mainContext } from '../../../../contexts/mainContext.js'
import SaveIcon from '@mui/icons-material/Save';

export default function CalendarComponent() {
    const { mainData, setMainData } = useContext(mainContext)
    const [numberOfDays, setNumberOfDays] = useState()

    const [travelPlanningName, setTravelPlanningName] = useState('');

    const handleOnChangeGoing = (date) => {
        setMainData(prev => ({
            ...prev,
            dateGoing: date
        }))
    }
    
    const handleOnChangeBack = (date) => {
        setMainData(prev => ({
            ...prev,
            dateBack: date
        }))
    }

    useEffect(() => {
        setNumberOfDays(calculateDifferenceInDays(mainData.dateGoing, mainData.dateBack))
    }, [mainData.dateGoing, mainData.dateBack])


    useEffect(() => {
        setMainData((prevData) => ({
            ...prevData,
            days: numberOfDays
        }))
    }, [numberOfDays, setMainData])

    function calculateDifferenceInDays(date1, date2) {
        // Convert dates to Date objects
        const startDate = new Date(date1);
        const endDate = new Date(date2);

        // Calculate the difference in milliseconds
        const differenceInMilliseconds = endDate - startDate;

        // Convert the difference to days
        const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);

        // Round the result to an integer
        return Math.round(differenceInDays);
    }

    const handleTextFieldChange = (e) => {
        setTravelPlanningName(e.target.value)
    }
    
    const handleSaveButtonClick = () => {
        setMainData(prev => ({
            ...prev,
            travelPlanningName
        }))
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
            <Typography variant='h6'>Give a name and select the start and end date of your trip</Typography>
            <Box>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
                    <Box sx={{display: 'flex', alignItems: 'center', gap:'30px'}}>
                        <TextField 
                            label="Travel Planning name" 
                            sx={{width: '300px'}}
                            value={travelPlanningName}
                            onChange={handleTextFieldChange}
                            autoComplete='off'
                        />
                        <Button variant='contained' sx={{height: '50px'}} onClick={handleSaveButtonClick}><SaveIcon /></Button>
                    </Box>
                    <Box sx={{height: '50px'}}>
                        <Typography variant='subtitle1'>{travelPlanningName}</Typography>
                    </Box>
                </Box>
                <Box sx={{
                    display: "flex",
                    gap: "30px",
                    mb: 5
                }} >
                    <ResponsiveDatePickers labelText={"One way"} changeFunction={handleOnChangeGoing} />
                    <ResponsiveDatePickers labelText={"Return"} changeFunction={handleOnChangeBack} />

                </Box>
            </Box>
        </Box>
    )
}
