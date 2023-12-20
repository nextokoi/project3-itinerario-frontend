import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material'

function InfoMessage() {
  return (
    <Box sx={{display: 'flex', gap: '10px', alignItems: 'center'}}>
        <InfoIcon />
        <Typography variant='body2'>
            You can select the items you want to include in your travel plan
        </Typography>
    </Box>
  )
}

export default InfoMessage