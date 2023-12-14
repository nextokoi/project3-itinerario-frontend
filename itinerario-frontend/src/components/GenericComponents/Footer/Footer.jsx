import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {

  const footerElements = [{ name: 'PLANNINGqqq', path: 'planning' }, { name: 'CONTACT', path: 'contact' }, { name: 'ABOUT', path: 'about' }]

  const footerArrElements = footerElements.map((element) => {

    return (
      <Box key={element.name}>
        <Typography variant="body1"><Link style={{ textDecoration: 'none', color: '#fff' }} to={element.path}>{element.name}</Link></Typography>
      </Box>
    )
  })

  return (

    <Box sx={{ backgroundColor: '#1976d2', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingX: '100px' }}>

      <Box sx={{ display: 'flex', color: '#fff', justifyContent: 'space-between', alignItems: 'center', gap: '70px' }}>

        <Box>
          <Typography variant="body1"><strong>ITINERO © 2023</strong></Typography>
        </Box>

        {footerArrElements}

      </Box>

      <Box sx={{ display: 'flex', gap: '30px' }}>
        <InstagramIcon fontSize="large" />
        <TwitterIcon fontSize="large" />
        <GitHubIcon fontSize="large" />
      </Box>

    </Box>
  )
}

export default Footer