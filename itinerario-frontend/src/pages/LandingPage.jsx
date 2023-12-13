import { Box, Button } from "@mui/material"
import { Link } from 'react-router-dom'
import SearchBar from "../components/SearchBar/SearchBar"
import { useState, useEffect, useContext } from "react"
import { countryContext } from "../contexts/countryContext"

function LandingPage() {

  // const [origin, setOrigin] = useState('')
  // const [destination, setDestination] = useState('')

  const { origins, setOrigins, destinations, setDestinations } = useContext(countryContext)

  function handleOriginChange(optionChosen) {

    setOrigins(optionChosen)

  }

  useEffect(() => {

    console.log("en el USeEffect ", origins)

  }, [origins])


  function handleDestinationChange(optionChosen) {

    setDestinations(optionChosen)

  }


  return (

    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', backgroundColor: '#1976d2', paddingY: '50px' }}>
        <SearchBar
          placeholder={'Origin'}
          inputChange={handleOriginChange}

        />
        <SearchBar
          placeholder={'Destination'}
          inputChange={handleDestinationChange}

        />

        <Link to='/about'><Button variant="contained" sx={{ backgroundColor: 'purple', padding: '15px' }}>Search</Button></Link>

      </Box>
      <div>LandingPage</div>
    </Box>
  )
}

export default LandingPage