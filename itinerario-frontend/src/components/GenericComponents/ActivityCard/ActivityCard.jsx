import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
export default function ActivityCard({ cardImg, cardText }) {
  return (
    <Card sx={{ width: 500}}>
      <CardContent sx={{ height: '300px', backgroundImage: `url(${cardImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <CardActions sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <Typography variant="h5" sx={{mb: 3, p: 2, color: '#fff', backgroundColor: '#3a393986', borderRadius: 2}}>{ cardText }</Typography>
            <Button variant="contained" size="small">View More</Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

ActivityCard.propTypes = {
    cardImg : PropTypes.string,
    cardText : PropTypes.string
}