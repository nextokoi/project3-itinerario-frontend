import { Box, Button } from "@mui/material"
import { Link } from 'react-router-dom'
import SearchBar from "../components/SearchBar/SearchBar"

function LandingPage() {
  return (
    <Box>
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', backgroundColor: '#1976d2', paddingY: '50px'}}>
            <SearchBar placeholder={'Origin'}/>
            <SearchBar placeholder={'Destination'}/>
            <Link to='/about'><Button variant="contained" sx={{backgroundColor: 'purple', padding: '15px'}}>Search</Button></Link>
        </Box>
        <div>LandingPage</div>
    </Box>
  )
}

export default LandingPage