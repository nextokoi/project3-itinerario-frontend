import { Box } from '@mui/material'
import ResponsiveDatePickers from '../../../GenericComponents/CalendarPlanning/CalendarPlanning.jsx'
import { useContext, useState, useEffect } from 'react'
import { mainContext } from '../../../../contexts/mainContext.js'

export default function CalendarComponent() {
    const { mainData, setMainData } = useContext(mainContext)
    const [numberOfDays, setNumberOfDays] = useState()

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

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{
                display: "flex",
                gap: "30px",
                mb: 5
            }} >

                <ResponsiveDatePickers labelText={"One way"} changeFunction={handleOnChangeGoing} />
                <ResponsiveDatePickers labelText={"Return"} changeFunction={handleOnChangeBack} />

            </Box>
        </Box>
    )
}
