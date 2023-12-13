import React from 'react'
import { Box } from '@mui/material'
import ResponsiveDatePickers from '../CalendarPlanning/CalendarPlanning.jsx'

export default function CalendarComponent() {
    return (

        <>
            <Box sx={{
                alignSelf: "center",
                width: "50%",
                height: "20%",
                marginY: "50px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "30px",
                borderRadius: "10px",
                border: "1px solid #1976d2"
            }} >

                <ResponsiveDatePickers labelText={"ida"} />
                <ResponsiveDatePickers labelText={"vuelta"} />

            </Box>
        </>

    )
}
