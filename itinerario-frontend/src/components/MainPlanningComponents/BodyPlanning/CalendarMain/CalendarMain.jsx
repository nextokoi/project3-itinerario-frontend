import { Box } from '@mui/material'
import ResponsiveDatePickers from '../../../GenericComponents/CalendarPlanning/CalendarPlanning.jsx'
import ButtonNavigation from '../../../GenericComponents/ButtonNavigation/ButtonNavigation.jsx'
import { useContext, useState, useEffect } from 'react'
import { mainContext } from '../../../../contexts/mainContext.js'

export default function CalendarComponent({ handleNavigation }) {
    const { mainData, setMainData } = useContext(mainContext)

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

    return (
        <>
            <Box sx={{
                alignSelf: "center",
                width: "500px",
                height: "200px",
                marginY: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                borderRadius: "10px",
                border: "1px solid #1976d2"
            }} >

                <ResponsiveDatePickers labelText={"ida"} changeFunction={handleOnChangeGoing} />
                <ResponsiveDatePickers labelText={"vuelta"} changeFunction={handleOnChangeBack} />

            </Box>

            {/* <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
                <ButtonNavigation handleNavigation={handleNavigation} text={'Back'}/>
                <ButtonNavigation handleNavigation={handleNavigation} text={'Next'}/>
                </Box> */}

        </>
    )
}
