import { Box, Typography } from '@mui/material'
import ActivityCard from '../../../GenericComponents/ActivityCard/ActivityCard'
import './LodgingMain.css'
import ActivitySelectedCard from '../../../GenericComponents/ActivitySelectedCard/ActivitySelectedCard'
import ButtonNavigation from './../../../GenericComponents/ButtonNavigation/ButtonNavigation'
import InfoMessage from '../../../GenericComponents/InfoMessage/InfoMessage'

function LodgingMain({handleNavigation}) {
  return (
    <Box sx={{ px: 10, my: 5}}>
        <Typography variant="h3" sx={{mb: 5}}>Choose Lodging</Typography>
        <InfoMessage />
        <Typography variant='body1' sx={{mb: 2}}>These are the most visited accomodations of the selected destination :</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', mb: 5 }}>
            <ActivityCard cardImg={'./../../../../../photos/japaneseHouse.jpg'} cardText={'Okinawa Rustic House'}/>
            <ActivityCard cardImg={'./../../../../../photos/japaneseTown.jpg'} cardText={'China Town'}/>
        </Box>
        <Box sx={{mb: 5}}>
            <Box sx={{mb: 2}}>
                <Typography variant="h6">Day 1</Typography>
                <ActivitySelectedCard cardImg={'./../../../../../photos/japaneseHouse.jpg'} cardTitle={'Okinawa Rustic House'} cardSubtitle={'4.7 / 5'}/>
            </Box>
            <Box>
                <Typography variant="h6">Day 2</Typography>
                <ActivitySelectedCard cardImg={'./../../../../../photos/japaneseTown.jpg'} cardTitle={'China Town'} cardSubtitle={'4.9 / 5'}/>
            </Box>
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'space-around'}}>
            <ButtonNavigation handleNavigation={handleNavigation} text={'Back'}/>
            <ButtonNavigation handleNavigation={handleNavigation} text={'Show Summary'} bgColor={"#4BB449"}/>
        </Box>
    </Box>
  )
}

export default LodgingMain