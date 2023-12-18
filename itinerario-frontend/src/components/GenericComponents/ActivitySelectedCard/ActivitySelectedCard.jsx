import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ActivitySelectedCard({ activityData, clickHandle }) {

  const handleClick = () => {
    clickHandle(activityData)
  }

  return (
    <Card sx={{ height: 150, width: 350, display: 'flex', alignItems: 'center', mb: 2 }} >
      <CardMedia sx={{ objectFit: 'cover', width: '100%', height: '100%' }} image={'./../../../../../photos/onsen.jpg'} />
      <CardContent sx={{ width: '100%' }}>
        <Typography variant="body2">{activityData.name}</Typography>
      </CardContent>
      <CardActions sx={{ width: '30%' }}>
        <Button size="small" onClick={handleClick}><DeleteIcon /></Button>
      </CardActions>
    </Card>
  )
}

ActivitySelectedCard.propTypes = {
  activityData: PropTypes.object,
  clickHandle: PropTypes.func
}