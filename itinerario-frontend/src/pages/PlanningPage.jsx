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
import { createTravelPlanning } from '../services/travelPlanningService'
import { createFlight } from '../services/flightInternalService'

export default function PlanningPage() {
    const { mainData } = useContext(mainContext)

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
        // const flightGoingData = {
        //     flight_num : mainData.flightGoing,
        //     airline, 
        //     origin, 
        //     depart_date, 
        //     distance, 
        //     duration, 
        //     trip_class, 
        //     price,
        //     travelLocationId
        // }
        // const flightBackData = {

        // }

        // console.log(mainData.flightGoing.numberFlight)

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
                    <ButtonNavigation handleNavigation={handleTravelPlanningCreation} text={'Save Changes'} bgColor={"#4BB449"} />
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
