import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ActivitySelectedCard({ activityData,cardTitle,clickHandle}) {

const handleClick = (e) => {
  clickHandle(activityData)
}


  return (
    <Card sx={{ height: 150, width: 350, display: 'flex', alignItems: 'center' }} >
      <CardMedia sx={{ objectFit: 'cover', width: '100%', height: '100%' }} image={'./../../../../../photos/onsen.jpg'} />
      <CardContent sx={{ width: '100%' }}>
        <Typography variant="h6">{cardTitle}</Typography>
        <Typography variant="body2">{activityData.name}</Typography>
      </CardContent>
      <CardActions sx={{ width: '30%' }}>
        <Button size="small" onClick={handleClick}><DeleteIcon /></Button>
      </CardActions>
    </Card>
  )
}

ActivitySelectedCard.propTypes = {
  cardImg: PropTypes.string,
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string
}