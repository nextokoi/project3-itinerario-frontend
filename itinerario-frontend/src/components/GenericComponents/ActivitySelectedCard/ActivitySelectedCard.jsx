import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ActivitySelectedCard({ cardImg, cardTitle, cardSubtitle }) {
  return (
    <Card sx={{ height: 150, width: 350, display: 'flex', alignItems: 'center' }} >
      <CardMedia sx={{ objectFit: 'cover', width: '100%', height: '100%' }} image={cardImg} />
      <CardContent sx={{ width: '100%' }}>
        <Typography variant="h6">{cardTitle}</Typography>
        <Typography variant="body2">{cardSubtitle}</Typography>
      </CardContent>
      <CardActions sx={{ width: '30%' }}>
        <Button size="small"><DeleteIcon /></Button>
      </CardActions>
    </Card>
  )
}

ActivitySelectedCard.propTypes = {
  cardImg: PropTypes.string,
  cardTitle: PropTypes.string,
  cardSubtitle: PropTypes.string
}