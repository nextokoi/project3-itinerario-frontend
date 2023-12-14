import CalendarComponent from '../components/MainPlanningComponents/BodyPlanning/CalendarMain/CalendarMain'
import HeaderPlanning from '../components/MainPlanningComponents/HeaderPlanning/HeaderPlanning'
import ActivityMain from '../components/MainPlanningComponents/BodyPlanning/ActivityMain/ActivityMain'
import FlightMain from '../components/MainPlanningComponents/BodyPlanning/FlightMain/FlightMain'

export default function PlanningPage() {
    return (
        <div>
            <HeaderPlanning />
 {/*            <CalendarComponent />
            <ActivityMain /> */}
            <FlightMain />
        </div>
    )
}
