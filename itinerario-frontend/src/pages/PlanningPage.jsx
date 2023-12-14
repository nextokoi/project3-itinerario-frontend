import ButtonNavigation from '../components/GenericComponents/ButtonNavigation/ButtonNavigation'
import CalendarComponent from '../components/MainPlanningComponents/BodyPlanning/CalendarMain/CalendarMain'
import HeaderPlanning from '../components/MainPlanningComponents/HeaderPlanning/HeaderPlanning'

export default function PlanningPage() {
    return (
        <div>
            <HeaderPlanning />
            <CalendarComponent />
            <ButtonNavigation text={"hola mundo"} bgColor={"black"} textColor={"white"}/>
        </div>
    )
}
