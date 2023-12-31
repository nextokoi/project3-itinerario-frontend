import { Box, Button, Typography } from "@mui/material"
import { Link } from 'react-router-dom'
import SearchBar from "../components/GenericComponents/SearchBar/SearchBar"
import { useContext } from "react"
import { mainContext } from "../contexts/mainContext"
import PublicIcon from '@mui/icons-material/Public';
import HikingIcon from '@mui/icons-material/Hiking';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import imageHero from '../assets/photos/hero-image.jpg'
import { useTheme } from "@mui/material"
import { customTheme } from "../themes/custom"

function LandingPage() {

  const theme = useTheme(customTheme)
  const { setMainData } = useContext(mainContext)

  function handleOriginChange(optionSelected) {

    setMainData(prev => ({
      ...prev,
      origin: { ...optionSelected },
    }))

  }

  function handleDestinationChange(optionSelected) {
    setMainData(prev => ({
      ...prev,
      destination: { ...optionSelected }
    }))
  }

  const handleClickToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth',
    });
  };

  return (

    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', backgroundColor: theme.palette.primary.main, paddingY: '50px' }}>
        <SearchBar
          placeholder={'Origin'}
          inputChange={handleOriginChange}
        />
        <SearchBar
          placeholder={'Destination'}
          inputChange={handleDestinationChange}
        />

        <Link to='planning'><Button variant="contained" sx={{ backgroundColor: theme.palette.secondary.fixedDim, color: theme.palette.secondary.fixedVariant , padding: '15px', "&:hover": { backgroundColor: theme.palette.secondary.fixedDim } }}>Search</Button></Link>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '100px', paddingY: '100px' }}>
        <Box sx={{ display: 'flex', gap: '50px', justifyContent: 'center', width: '80%' }}>
          <Box sx={{ display: 'flex', gap: '10px' }}>
            <PublicIcon /><Typography>Discover your ideal destination for the perfect getaway</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: '10px' }}>
            <HikingIcon /> <Typography> Choose from a variety of activities to tailor your travel experience to your liking</Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: '10px' }}>
            <FactCheckIcon /> <Typography>Save a summary of your itinerary with all your chosen activities to your profile for easy access and sharing</Typography>
          </Box>
        </Box>
        <Box sx={{ backgroundImage: `url(${imageHero})`, height: '767px', width: '80%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 5 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', height: '100%', justifyContent: 'space-around', paddingLeft: '20px' }}>
            <Box width={300}>
              <Typography variant="h6">What will be your next destination?</Typography>
              <Typography variant="h4">The world is full of mysteries</Typography>
            </Box>
            <Button variant="contained" sx={{ padding: '20px', backgroundColor: theme.palette.primary.fixed, color: theme.palette.primary.fixedVariant, "&:hover": { backgroundColor: theme.palette.primary.fixed } }} onClick={handleClickToTop}>Start your journey</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default LandingPage