import ActivitySelectedCard from '../../../GenericComponents/ActivitySelectedCard/ActivitySelectedCard'
import FlightCard from '../../../GenericComponents/FlightCard/FlightCard'
import './SummaryMain.css'
import { Box, Divider, Typography } from '@mui/material'

function SummaryMain() {
  return (
    <Box sx={{px: 10}}>
        <Box sx={{mb: 5}}>
            <Box sx={{mb: 3}}>
                <Typography variant='h6'>Date</Typography>
                <Typography variant='overline'>15/01/2024 to 20/01/2024</Typography>
            </Box>
            <Box>
                <Typography variant='h4' sx={{mb: 2}}>Flights</Typography>
                <Box sx={{display: 'flex', gap: '10px'}}>
                    <FlightCard />
                    <FlightCard />
                </Box>
            </Box>
        </Box>
        <Divider />
        <Box sx={{my: 5}}>
            <Typography variant='h4' sx={{my: 5}}>Activities</Typography>
            <Box sx={{mb: 5}}>
                <Typography sx={{mb: 2}}>Day 1</Typography>
                <ActivitySelectedCard />
            </Box>
            <Box>
                <Typography sx={{mb: 2}}>Day 2</Typography>
                <ActivitySelectedCard />
            </Box>
        </Box>
        <Divider />
        <Box sx={{my: 5}}>
            <Typography variant='h4' sx={{my: 5}}>Lodging</Typography>
            <Box sx={{mb: 5}}>
                <Typography sx={{mb: 2}}>Day 1</Typography>
                <ActivitySelectedCard />
            </Box>
            <Box>
                <Typography sx={{mb: 2}}>Day 2</Typography>
                <ActivitySelectedCard />
            </Box>
        </Box>
        <Divider />
        <Box sx={{my: 5, display: 'flex', gap:'30px', justifyContent: 'end'}}>
            <Typography variant='h5'>TOTAL</Typography>
            <Typography variant='h3'>1187€</Typography>
        </Box>
    </Box>
  )
}

export default SummaryMain