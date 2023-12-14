import CalendarComponent from '../components/MainPlanningComponents/BodyPlanning/CalendarMain/CalendarMain'
import HeaderPlanning from '../components/MainPlanningComponents/HeaderPlanning/HeaderPlanning'
import ActivityMain from '../components/MainPlanningComponents/BodyPlanning/ActivityMain/ActivityMain'
import FlightMain from '../components/MainPlanningComponents/BodyPlanning/FlightMain/FlightMain'
import LodgingMain from '../components/MainPlanningComponents/BodyPlanning/LodgingMain/LodgingMain'
import LogInForm from '../components/GenericComponents/LogInForm/LogInForm'
import SignUpForm from '../components/GenericComponents/SignUpForm/SignUpForm'


export default function PlanningPage() {
    return (
        <div>
            <HeaderPlanning />
 {/*            <CalendarComponent />
            <FlightMain />
            <ActivityMain /> 
            <LodgingMain />
            <LogInForm />*/}
            <SignUpForm />
        </div>
    )
}
