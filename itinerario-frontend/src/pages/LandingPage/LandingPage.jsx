import { Box, Button } from "@mui/material"
import SearchBar from "../../components/SearchBar/SearchBar"

function LandingPage() {
  return (
    <Box>
        <Box sx={{display: 'flex', justifyContent: 'center', gap: '20px', backgroundColor: '#1976d2', paddingY: '50px'}}>
            <SearchBar placeholder={'Origin'}/>
            <SearchBar placeholder={'Destination'}/>
            <Button variant="contained" sx={{backgroundColor: 'purple'}}>Search</Button>
        </Box>
        <div>LandingPage</div>
    </Box>
  )
}

export default LandingPage