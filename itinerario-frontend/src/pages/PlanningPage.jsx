import CalendarComponent from '../components/MainPlanningComponents/BodyPlanning/CalendarMain/CalendarMain'
import HeaderPlanning from '../components/MainPlanningComponents/HeaderPlanning/HeaderPlanning'
import ActivityMain from '../components/MainPlanningComponents/BodyPlanning/ActivityMain/ActivityMain'
import FlightMain from '../components/MainPlanningComponents/BodyPlanning/FlightMain/FlightMain'
import LodgingMain from '../components/MainPlanningComponents/BodyPlanning/LodgingMain/LodgingMain'
import SummaryMain from '../components/MainPlanningComponents/BodyPlanning/SummaryMain/SummaryMain'
import Box from '@mui/material/Box'
import ButtonNavigation from '../components/GenericComponents/ButtonNavigation/ButtonNavigation'
import { useState, useEffect, useContext } from 'react'
import { mainContext } from '../contexts/mainContext'
import { createTravelPlanning } from '../services/travelPlanningService'
import { Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { customTheme } from '../themes/custom'
import { useTheme } from '@emotion/react'

export default function PlanningPage() {
    const { mainData } = useContext(mainContext)
    const navigate = useNavigate()
    const theme = useTheme(customTheme)

    useEffect(() => {
        console.log(mainData)
    }, [mainData])


    const [stepperStatus, setStepperStatus] = useState(0)
    useEffect(() => {
    }, [stepperStatus])

    const handleNavigation = (textValue) => {
        if (textValue === "Back") {
            if (stepperStatus > 0) setStepperStatus(stepperStatus - 1)
        } else {
            if (stepperStatus <= 3) setStepperStatus(stepperStatus + 1)
        }
    }

    const handleTravelPlanningCreation = () => {

        const travelPlanningData = {
            name: mainData.travelPlanningName,
            description: "",
            beginning_date: mainData.dateGoing,
            ending_date: mainData.dateBack,
            flight_going_id: 1,
            flight_return_id: 2,

            travelLocationId: mainData.destination.id
        }
        console.log(travelPlanningData)

        createTravelPlanning(travelPlanningData)
        
        navigate('/profile')
    }

    const componentSwitcher = (stepNum) => {
        switch (stepNum) {
            case 0:
                return (<CalendarComponent />)
            case 1:
                return (<FlightMain />)
            case 2:
                return (<ActivityMain />)
            case 3:
                return (<LodgingMain />)
            case 4:
                return (<SummaryMain />)
            default:
                return <CalendarComponent />
        }
    }

    function renderButtons() {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'space-around', my: "40px"}}>
                {stepperStatus === 0 && <>
                    <Box sx={{padding: '15px', width: '100px'}}></Box>
                    <ButtonNavigation handleNavigation={handleNavigation} text={'Next'} bgColor={theme.palette.secondary.fixedDim} textColor={theme.palette.secondary.fixedVariant} hover={theme.palette.secondary.fixedDim}/>
                    </>}
                {stepperStatus > 0 && stepperStatus < 3 && <>
                    <ButtonNavigation handleNavigation={handleNavigation} text={'Back'} bgColor={theme.palette.terciary.main} textColor={theme.palette.terciary.onContainer} hover={theme.palette.terciary.main}/>
                    <ButtonNavigation handleNavigation={handleNavigation} text={'Next'} bgColor={theme.palette.secondary.fixedDim} textColor={theme.palette.secondary.fixedVariant} hover={theme.palette.secondary.fixedDim}/>
                </>}
                {stepperStatus === 3 && <>
                    <ButtonNavigation handleNavigation={handleNavigation} text={'Back'} bgColor={theme.palette.terciary.main} textColor={theme.palette.terciary.onContainer} hover={theme.palette.terciary.main} />
                    <ButtonNavigation handleNavigation={handleNavigation} text={'Go to Summary'} bgColor={theme.palette.primary.main} hover={theme.palette.primary.main}/>
                </>}
                {stepperStatus === 4 && <>
                    <ButtonNavigation handleNavigation={handleNavigation} text={'Back'} bgColor={theme.palette.terciary.main} textColor={theme.palette.terciary.onContainer} hover={theme.palette.terciary.main} />
                    <ButtonNavigation handleNavigation={handleTravelPlanningCreation} text={'Save Changes'} bgColor={theme.palette.primary.main} hover={theme.palette.primary.main}/>
                </>}
            </Box>
        )
    }


    return (

        <Container>

            <HeaderPlanning stepperStatus={stepperStatus} />
            {componentSwitcher(stepperStatus)}
            {renderButtons()}

        </Container>

    )
}
