import { Box, Button, Typography, Grid } from "@mui/material"
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
import TextField from "@mui/material/TextField"
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import IconButton from "@mui/material/IconButton"
import Autocomplete from '@mui/material/Autocomplete';
import TravelersSearchBar from "../components/GenericComponents/TravelersSearchBar/TravelersSearchBar"
import { styled } from '@mui/material/styles';
import RadioGroupLanding from "../components/GenericComponents/CheckboxGroupLanding/CheckboxGroupLanding"


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


      <Box sx={{ display: "flex", flexDirection: "column" }}>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'top',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: theme.palette.primary.main,
          height: '100px',
          // paddingBottom: 15,
          mt: 7,
          // border: "1px solid"
        }}>

          <SearchBar
            radiusTopLeft={20}
            radiusBottomLeft={20}
            radiusBottomRight={4}
            radiusTopRight={4}
            placeholder={'Origin'}
            inputChange={handleOriginChange}
          />

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            alignContent: "center",
            gap: 1,
          }}>

            <IconButton aria-label="swap" sx={{height: "50px"}}>
              <SwapHorizIcon sx={{
               
                
                color: "#fff",
                // backgroundColor: "#fff"
                // color: "#fabd00"
                // color: "#00201c"
                // color: "#74F8E5"
              }} />
            </IconButton>

          </Box>

          <SearchBar
            radiusTopLeft={2}
            radiusBottomLeft={2}
            radiusBottomRight={2}
            radiusTopRight={2}
            placeholder={'Destination'}
            inputChange={handleDestinationChange}
          />

          <TravelersSearchBar

            label={"Adults"}
            labelText={"Adults"}
            radiusTopLeft={2}
            radiusBottomLeft={2}
            radiusBottomRight={2}
            radiusTopRight={2}

          />

          <TravelersSearchBar

            label={"Children"}
            labelText={"Children"}
            radiusTopLeft={2}
            radiusBottomLeft={2}
            radiusBottomRight={15}
            radiusTopRight={15}

          />

          <Link to='planning'>
            <Button variant="contained" sx={{
              ml: 2,
              borderRadius: 4, width: 120, height: 55,
              backgroundColor: theme.palette.secondary.fixedDim,
              color: theme.palette.secondary.fixedVariant, padding: '15px',
              "&:hover": { backgroundColor: theme.palette.secondary.fixedDim }
            }}>
              Search
            </Button>
          </Link>

        </Box>

        <Box sx={{
          display: 'flex',
          justifyContent: 'start',
          alignContent: 'center',
          alignItems: 'center',
          gap: '10px',
          backgroundColor: theme.palette.primary.main,
          height: '100px',
          px: 43,
          pb: 4

       
          // border: "1px solid"
        }}>

          <Box display={"flex"} flexDirection={"column"}>

            <RadioGroupLanding text={"Direct flights"}></RadioGroupLanding>
            <RadioGroupLanding text={"Sugest me the best activities of the location"}></RadioGroupLanding>

          </Box>

        </Box>


      </Box>


      <Box sx={{ flexGrow: 1, paddingX: 42, py: 15 }}>
        <Grid container spacing={4}>

          <Grid item xs={4}>
            <Box sx={{ display: "flex", gap: 2, padding: 0, mb: 8 }}>
              <PublicIcon /><Typography>Discover your ideal destination for the perfect getaway and enjoy</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", gap: 2, padding: 0, mb: 6 }}>
              <HikingIcon /><Typography>Choose from a variety of activities to tailor your travel experience to your liking</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ display: "flex", gap: 2, padding: 0, mb: 6 }}>
              <FactCheckIcon /><Typography>Save a summary of your itinerary with all your chosen activities to your profile</Typography>
            </Box>
          </Grid>

          {/* Una columna con una imagen y contenido superpuesto */}
          <Grid item xs={12}>
            <Box
              sx={{
                position: 'relative',
                textAlign: 'center',
                backgroundImage: `url(${imageHero})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 10,
                height: '900px'
              }}
            >
              <Box
                sx={{
                  width: 400,
                  position: 'absolute',
                  top: '15%',
                  left: '5%',
                  // color: 'white',
                  textAlign: 'left'
                }}
              >
                <Typography variant="h6">What will be your next destination?</Typography>
                <Box mb={2}></Box>
                <Typography variant="h4">The world is full of mysteries</Typography>

              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '80%',
                  left: '5%',
                  color: 'white',
                  textAlign: 'left'
                }}
              >
                <Button variant="contained" sx={{ padding: '20px', backgroundColor: theme.palette.primary.fixed, color: theme.palette.primary.fixedVariant, "&:hover": { backgroundColor: theme.palette.primary.fixed } }} onClick={handleClickToTop}>Start your journey</Button>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

    </Box>

  )
}

export default LandingPage