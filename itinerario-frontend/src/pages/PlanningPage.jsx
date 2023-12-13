import React from 'react'
import CustomizedSteppers from '../components/Stepper/Stepper'
import BasicBreadcrumbs from '../components/BreadCrumbs/BreadCrumbs'
import CalendarComponent from '../components/CalendarComponent/CalendarComponent'
import { Box } from '@mui/material'

export default function PlanningPage() {

    const destinationImg = './../../public/photos/destinoEjemplo.jpg'

    return (

        <>
            <Box>
                <Box sx={{ margin: '30px' }}>
                    <BasicBreadcrumbs />
                </Box>

                <Box>
                    <CustomizedSteppers />
                </Box>

                <Box sx={{
                    backgroundImage: `url(${destinationImg})`,
                    backgroundPosition: "center",
                    marginY: "40px",
                    height: "40%",
                    width: "50%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    border: "1px solid #1976d2",
                }}>

                </Box>

                <CalendarComponent />

            </Box >
        </>
    )
}
