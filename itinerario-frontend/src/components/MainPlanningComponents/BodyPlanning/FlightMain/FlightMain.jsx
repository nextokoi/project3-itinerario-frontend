import FlightCard from '../../../GenericComponents/FlightCard/FlightCard'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import InfoMessage from '../../../GenericComponents/InfoMessage/InfoMessage'
import { useContext, useEffect, useState } from 'react'
import fetchData from '../../../../services/flightExternalService'
import { mainContext } from '../../../../contexts/mainContext'
import logoUX from '../../../../assets/photos/logo-UX.png'
import logoFR from '../../../../assets/photos/logo-FR.png'
import logoIB from '../../../../assets/photos/logo-IB.png'

function FlightMain() {

    const { mainData, setMainData } = useContext(mainContext)

    const [flightListGoing, setFlightListGoing] = useState([])
    const [flightListBack, setFlightListBack] = useState([])

    const [isSelectedGoing, setIsSelectGoing] = useState()
    const [isSelectedBack, setIsSelectBack] = useState()

    const { origin, destination, dateGoing, dateBack } = mainData

    //Fetch flight data

    useEffect(() => {
        fetchData(origin.cityCode, destination.cityCode, dateGoing, setFlightListGoing)
        fetchData(destination.cityCode, origin.cityCode, dateBack, setFlightListBack)
    }, [destination.cityCode, origin.cityCode, dateGoing, dateBack])

    const airlines = [
        {
            code: "UX",
            name: "Air Europa",
            imageLogo: logoUX
        },
        {
            code: "RYR",
            name: "Ryanair",
            imageLogo: logoFR
        },
        {
            code: "IBE",
            name: "Iberia",
            imageLogo: logoIB
        }
    ]


    //Select and unselect flight cards

    const handleFlightSelectGoing = (flight) => {
        setIsSelectGoing(flight.id)
        setMainData((prevData) => ({
            ...prevData,
            flightGoing: flight
        }))
    }

    const handleFlightSelectBack = (flight) => {
        setIsSelectBack(flight.id)
        setMainData((prevData) => ({
            ...prevData,
            flightBack: flight
        }))
    }



    // filtering and mapping the list of flights cards

    const renderFlightListGoing = (flightList) => {
        return flightList.filter((flight) => flight.depart_date === mainData.dateGoing)
            .map((flight, index) => {
                return (
                    <FlightCard
                        key={index}
                        data={flight}
                        date={flight.depart_date}
                        onSelect={(selectedFlightGoing) => handleFlightSelectGoing(selectedFlightGoing)}
                        isSelected={isSelectedGoing === flight.id}
                        airlines={airlines}
                        origin={origin.name}
                        destination={destination.name}
                    />
                )
            })
    }

    const renderFlightListBack = (flightList) => {
        return flightList.filter((flight) => flight.depart_date === mainData.dateBack)
            .map((flight, index) => {
                return (
                    <FlightCard
                        key={index}
                        data={flight}
                        date={flight.depart_date}
                        onSelect={(selectedFlightBack) => handleFlightSelectBack(selectedFlightBack)}
                        isSelected={isSelectedBack === flight.id}
                        airlines={airlines}
                        origin={destination.name}
                        destination={origin.name}
                    />
                )

            })

    }

    return (
        <Box sx={{ px: 10 }}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 5, mb: 5}}>
                <Box>
                    <Typography variant='h3'>Fly to your destination</Typography>
                </Box>
                <InfoMessage />
            </Box>
            <Box sx={{ mb: 10 }}>

                <Box sx={{ mb: 10 }}>
                    <Typography variant='h4' sx={{ mb: 2 }}>One-Way</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {renderFlightListGoing(flightListGoing)}
                    </Box>
                </Box>

                <Box>
                    <Typography variant='h4' sx={{ mb: 2 }}>Return</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                        {renderFlightListBack(flightListBack)}
                    </Box>
                </Box>
            </Box>
        </Box>
    )

}

export default FlightMain