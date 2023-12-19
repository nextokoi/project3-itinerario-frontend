import './ProfileCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import { Box, CardMedia } from '@mui/material';

function ProfileCard({ data }) {

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  const beginningDate = formatDate(data.beginning_date)
  const endingDate = formatDate(data.ending_date)

  return (
    <Card sx={{ width: 550, p: 1, border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <CardMedia sx={{ height: 300 ,width: 300, borderRadius: 1 }} image={data.travelLocation.imageURL} title="hola"/>
      <CardContent sx={{ height: '300px', display: 'flex', alignItems: 'center' }}>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <Typography variant="h5">{data.name}</Typography>
            <Box>
              <Typography sx={{fontWeight: 'bold'}}>Destination</Typography>
              <Typography variant='body1'>{data.travelLocation.name}</Typography>
            </Box>
            <Box>
              <Box sx={{display: 'flex', gap: 1}}>
                <Typography sx={{fontWeight: 'bold'}}>Start date</Typography> <Typography variant='body1'>{beginningDate}</Typography>
              </Box>
              <Box sx={{display: 'flex', gap: 1}}>
                <Typography sx={{fontWeight: 'bold'}}>End date</Typography> <Typography variant='body1'>{endingDate}</Typography>
              </Box>
            </Box>
          </Box>
      </CardContent>
    </Card>
  )
}

ProfileCard.propTypes = {
  data : PropTypes.object
}

export default ProfileCard