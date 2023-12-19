import FlightCard from '../../../GenericComponents/FlightCard/FlightCard'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import InfoMessage from '../../../GenericComponents/InfoMessage/InfoMessage'
import { useContext, useEffect, useState } from 'react'
import fetchData from '../../../../services/flightExternalService'
import { mainContext } from '../../../../contexts/mainContext'

function FlightMain() {

    const { mainData, setMainData } = useContext(mainContext)

    const [flightListOneWay, setFlightListOneWay] = useState([])
    const [flightListReturn, setFlightListReturn] = useState([])

    const { origin, destination, dateGoing, dateBack } = mainData

    //Fetch flight data

    useEffect(() => {
        fetchData(origin.cityCode, destination.cityCode, dateGoing, setFlightListOneWay)
        fetchData(destination.cityCode, origin.cityCode, dateBack, setFlightListReturn)
    }, [destination.cityCode, origin.cityCode, dateGoing, dateBack])

    const airlines = [
        {
            code: "UX",
            name: "Air Europa",
            imageLogo: "./public/photos/logo-UX.png"
        },
        {
            code: "RYR",
            name: "Ryanair",
            imageLogo: "./public/photos/logo-FR.png"
        },
        {
            code: "IBE",
            name: "Iberia",
            imageLogo: "./public/photos/logo-IB.png"
        }
    ]


    //Select and unselect flight cards

    const handleFlightSelectGoing = (flight) => {
        setMainData((prevData) => ({
            ...prevData,
            flightGoing: flight
        }))
    }

    const handleFlightSelectBack = (flight) => {
        setMainData((prevData) => ({
            ...prevData,
            flightBack: flight
        }))
    }

    // filtering and mapping the list of flights cards

    const renderFlightListOneWay = (flightList) => {
        return flightList.filter((flight) => flight.depart_date === mainData.dateGoing)
            .map((flight, index) => {
                return (
                    <FlightCard
                        key={index}
                        data={flight}
                        date={flight.depart_date}
                        onSelect={(selectedFlightGoing) => handleFlightSelectGoing(selectedFlightGoing)}
                        airlines={airlines}
                        origin={origin.name}
                        destination={destination.name}
                    />
                )
            })
    }

    const renderFlightListReturn = (flightList) => {
        return flightList.filter((flight) => flight.depart_date === mainData.dateBack)
            .map((flight, index) => {
                return (
                    <FlightCard
                        key={index}
                        data={flight}
                        date={flight.depart_date}
                        onSelect={(selectedFlightBack) => handleFlightSelectBack(selectedFlightBack)}
                        airlines={airlines}
                        origin={destination.name}
                        destination={origin.name}
                    />
                )

            })

    }

    return (
        <Box sx={{ px: 10 }}>
            <Box sx={{ mb: 5 }}>
                <Typography variant='h3'>Fly to your destination</Typography>
            </Box>
            <InfoMessage />
            <Box sx={{ mb: 10 }}>

                <Box sx={{ mb: 10 }}>
                    <Typography variant='h4' sx={{ mb: 2 }}>One-Way</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {renderFlightListOneWay(flightListOneWay)}
                    </Box>
                </Box>

                <Box>
                    <Typography variant='h4' sx={{ mb: 2 }}>Return</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {renderFlightListReturn(flightListReturn)}
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}

export default FlightMain