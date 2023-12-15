import CalendarComponent from '../components/MainPlanningComponents/BodyPlanning/CalendarMain/CalendarMain'
import HeaderPlanning from '../components/MainPlanningComponents/HeaderPlanning/HeaderPlanning'
import ActivityMain from '../components/MainPlanningComponents/BodyPlanning/ActivityMain/ActivityMain'
import FlightMain from '../components/MainPlanningComponents/BodyPlanning/FlightMain/FlightMain'
import LodgingMain from '../components/MainPlanningComponents/BodyPlanning/LodgingMain/LodgingMain'
import LogInForm from '../components/GenericComponents/LogInForm/LogInForm'
import SignUpForm from '../components/GenericComponents/SignUpForm/SignUpForm'
import SummaryMain from '../components/MainPlanningComponents/BodyPlanning/SummaryMain/SummaryMain'
import Box from '@mui/material/Box'
import ButtonNavigation from '../components/GenericComponents/ButtonNavigation/ButtonNavigation'
import { useState, useEffect, useContext } from 'react'
import { mainContext } from '../contexts/mainContext'

export default function PlanningPage() {
    const { mainData } = useContext(mainContext)
    
    console.log('Origin ', mainData.origin)
    console.log('Destination ', mainData.destination)

    const [stepperStatus, setStepperStatus] = useState(0)
    useEffect(() => {
        console.log(stepperStatus)
    }, [stepperStatus])

    const handleNavigation = (textValue) => {
        if (textValue === "Back") {
            if (stepperStatus > 0) setStepperStatus(stepperStatus - 1)
        } else {
            if (stepperStatus <= 3) setStepperStatus(stepperStatus + 1)
        }
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
            <Box sx={{ display: 'flex', justifyContent: 'space-around', my: "40px" }}>
                {stepperStatus === 0 && <ButtonNavigation handleNavigation={handleNavigation} text={'Next'} />}
                {stepperStatus > 0 && stepperStatus < 3 && <>
                    <ButtonNavigation handleNavigation={handleNavigation} text={'Back'} />
                    <ButtonNavigation handleNavigation={handleNavigation} text={'Next'} />
                </>}
                {stepperStatus === 3 && <>
                    <ButtonNavigation handleNavigation={handleNavigation} text={'Back'} />
                    <ButtonNavigation handleNavigation={handleNavigation} text={'Go to Summary'} bgColor={"#4BB449"} />
                </>}
                {stepperStatus === 4 && <>
                    <ButtonNavigation handleNavigation={handleNavigation} text={'Back'} />
                    <ButtonNavigation handleNavigation={handleNavigation} text={'Save Changes'} bgColor={"#4BB449"} />
                </>}
            </Box>
        )
    }


    return (

        <div>
            
            <HeaderPlanning stepperStatus={stepperStatus} />
            {componentSwitcher(stepperStatus)}
            {renderButtons()}

        </div>

    )
}
