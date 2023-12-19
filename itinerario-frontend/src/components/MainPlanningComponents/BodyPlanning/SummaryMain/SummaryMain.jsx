import FlightCardSummary from '../../../GenericComponents/FlightCardSummary/FlightCardSummary'
import ActivityCardSummary from '../../../GenericComponents/ActivityCardSummary/ActivityCardSummary'
import './SummaryMain.css'
import { Box, Divider, Typography } from '@mui/material'
import { useContext } from 'react'
import { mainContext } from '../../../../contexts/mainContext'

function SummaryMain() {

    const { mainData } = useContext(mainContext)

    // Flight Card Summary props 
    const travelPlanningName= mainData.travelPlanningName

    const origin = mainData.origin.name
    const originCode = mainData.origin.cityCode

    const airlineNameGoing = mainData.flightGoing.airline
    const airlineNameGoingCode = mainData.flightGoing.airlineCode
    const flightNumGoing = mainData.flightGoing.numberFlight
    const airlineLogoGoing = mainData.flightGoing.airlineImage

    const departureTimeGoing = mainData.flightGoing.departTime

    const airlineNameBack = mainData.flightBack.airline
    const airlineNameBackCode = mainData.flightBack.airlineCode
    const flightNumBack = mainData.flightBack.numberFlight
    const airlineLogoBack = mainData.flightBack.airlineImage

    const departureTimeBack = mainData.flightBack.departTime

    const destination = mainData.destination.name
    const destinationCode = mainData.destination.cityCode

    const dateGoing = mainData.dateGoing
    const dateBack = mainData.dateBack

    const priceGoing = mainData.flightGoing.value
    const priceBack = mainData.flightBack.value

    const durationGoing = mainData.flightGoing.durationFormatted
    const durationBack = mainData.flightBack.durationFormatted

    // End - Flight Card Summary props

    // Activity Card Summary props

    const renderActivityCards = () => {

        return mainData.activities.map((activity, index) => {
            return (
                <Box key={index}>
                    <Typography>{`Day ${index + 1}`}</Typography>
                    <ActivityCardSummary
                        activityImg={activity.imageURL}
                        activityTitle={activity.name}
                    />
                </Box>
            )
        })

    }
    const renderLodgingCards = () => {

        return mainData.lodging.map((activity, index) => {
            return (
                <Box key={index}>
                    <Typography>{`Day ${index + 1}`}</Typography>
                    <ActivityCardSummary
                        activityImg={activity.imageURL}
                        activityTitle={activity.name}
                    />
                </Box>
            )
        })

    }
    // End - Activity Card Summary props

    // const totalPriceCalculation = () => {

    //     const totalPrice = mainData.flightGoing.value + mainData.flightBack.value
    //     return totalPrice
    // }

    return (
        <Box sx={{ px: 10 }}>
            <Box sx={{ mb: 5 }}>
                <Box sx={{ mb: 3 }}>
                    <Typography variant='h4' >Name</Typography>
                    <Typography sx={{my:2}} variant='h5'>{travelPlanningName}</Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                    <Typography variant='h4' >Date</Typography>
                    <Typography variant='overline'>{mainData.dateGoing} <strong>To</strong>  {mainData.dateBack}</Typography>
                </Box>
                <Box>
                    <Typography variant='h4' sx={{ mb: 2 }}>Flights</Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>

                        <FlightCardSummary

                            origin={origin}
                            originCode={originCode}

                            destination={destination}
                            destinationCode={destinationCode}

                            airlineName={airlineNameGoing}
                            airlineCode={airlineNameGoingCode}
                            airlineLogo={airlineLogoGoing}


                            flightNum={flightNumGoing}
                            departTime={departureTimeGoing}

                            date={dateGoing}
                            price={priceGoing}
                            duration={durationGoing}

                        >
                        </FlightCardSummary>
                        <FlightCardSummary

                            origin={destination}
                            originCode={destinationCode}

                            destination={origin}
                            destinationCode={originCode}

                            airlineName={airlineNameBack}
                            airlineCode={airlineNameBackCode}
                            airlineLogo={airlineLogoBack}

                            flightNum={flightNumBack}
                            departTime={departureTimeBack}

                            date={dateBack}
                            price={priceBack}
                            duration={durationBack}

                        >
                        </FlightCardSummary>

                    </Box>
                </Box>
            </Box>

            <Divider />

            <Box sx={{ my: 5 }}>
                <Typography variant='h4' sx={{ my: 5 }}>Activities</Typography>
                <Box sx={{ mb: 5 }}>

                    {renderActivityCards()}

                </Box>

            </Box>
            <Divider />
            <Box sx={{ my: 5 }}>
                <Typography variant='h4' sx={{ my: 5 }}>Lodging</Typography>
                <Box sx={{ mb: 5 }}>

                    {renderLodgingCards()}

                </Box>

            </Box>
            <Divider />
            <Box sx={{ my: 5, display: 'flex', gap: '30px', justifyContent: 'end' }}>
                <Typography variant='h5'>TOTAL</Typography>
                <Typography variant='h3'>{priceGoing + priceBack} € </Typography>
            </Box>
        </Box>

    )
}

export default SummaryMain