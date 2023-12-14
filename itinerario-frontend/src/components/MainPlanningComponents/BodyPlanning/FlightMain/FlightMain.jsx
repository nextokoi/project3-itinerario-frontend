import FlightCard from '../../../GenericComponents/FlightCard/FlightCard'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import InfoMessage from '../../../GenericComponents/InfoMessage/InfoMessage';

// contenedor del paso Flight

const fligtListIda = [{

    id: 1,
    company: "Iberia",
    date: "15 January",

    originCode: "LPA",
    origin: "Las Palmas de Gran Canaria",
    departureTime: "09:00",

    destinationCode: "TYO",
    destination: "Tokyo",
    arrivalTime: "10:00",

    price: "200€",
    duration: "21h",

},
{

    id: 2,
    company: "Fly Emirates",
    date: "15 January",

    originCode: "LPA",
    origin: "Las Palmas de Gran Canaria",
    departureTime: "09:00",

    destinationCode: "TYO",
    destination: "Tokyo",
    arrivalTime: "10:00",

    price: "200€",
    duration: "21h",


},
{
    id: 3,
    company: "Air France",
    date: "15 January",

    originCode: "LPA",
    origin: "Las Palmas de Gran Canaria",
    departureTime: "09:00",

    destinationCode: "TYO",
    destination: "Tokyo",
    arrivalTime: "10:00",

    price: "200€",
    duration: "21h",

}

]
const fligtListVuelta = [
    {

        id: 1,
        company: "Iberia",
        date: "16 January",

        originCode: "LPA",
        origin: "Las Palmas de Gran Canaria",
        departureTime: "09:00",

        destinationCode: "TYO",
        destination: "Tokyo",
        arrivalTime: "10:00",

        price: "200€",
        duration: "21h",

    }, {

        id: 2,
        company: "Fly Emirates",
        date: "16 January",

        originCode: "LPA",
        origin: "Las Palmas de Gran Canaria",
        departureTime: "09:00",

        destinationCode: "TYO",
        destination: "Tokyo",
        arrivalTime: "10:00",

        price: "250€",
        duration: "21h",
    }, {

        id: 3,
        company: "Air France",
        date: "16 January",

        originCode: "LPA",
        origin: "Las Palmas de Gran Canaria",
        departureTime: "09:00",

        destinationCode: "TYO",
        destination: "Tokyo",
        arrivalTime: "10:00",

        price: "300€",
        duration: "21h",
    }
]


function FlightMain() {

    const flightListedGoing = fligtListIda.map((flight) => {

        /* const propFlightGoing = {} */
        return (<FlightCard

            key={flight.id}
            flightCompanyName={flight.company}
            departureDate={flight.date}
            destinationCode={flight.destinationCode}
            originCode={flight.originCode}
            origin={flight.origin}
            arrivalTime={flight.arrivalTime}
            destination={flight.destination}
            departureTime={flight.departureTime}
            price={flight.price}
            duration={flight.duration}
            classIcon="rotarDcha">

        </FlightCard>)

    })

    const flightListedReturn = fligtListVuelta.map((flight) => {

        /* const propFlightReturn = {} */
        return (<FlightCard

            key={flight.id}
            flightCompanyName={flight.company}
            departureDate={flight.date}
            destinationCode={flight.destinationCode}
            originCode={flight.originCode}
            origin={flight.origin}
            arrivalTime={flight.arrivalTime}
            destination={flight.destination}
            departureTime={flight.departureTime}
            price={flight.price}
            duration={flight.duration}
            classIcon="rotarIzq"

        ></FlightCard>)
    })


    return (
        <Box sx={{px:10}}>
            <Box sx={{mb: 5}}>
                <Typography variant='h3'>Fly to your destination</Typography>
            </Box>
                <InfoMessage />
            <Box sx={{mb: 10}}>
                {/* IDA  */}
                <Box sx={{mb: 10}}>
                    <Typography variant='h4' sx={{mb: 2}}>One-Way</Typography>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                        {flightListedGoing}
                    </Box>
                </Box>

                {/* VUELTA  */}
                <Box>
                    <Typography variant='h4' sx={{mb: 2}}>Return</Typography>
                    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                        {flightListedReturn}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default FlightMain
