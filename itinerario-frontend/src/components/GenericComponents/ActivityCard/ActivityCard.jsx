import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function ActivityCard({ activityData, clickHandle }) {

  const [selected, setSelected] = useState(false)

  const handleClick = () => {
    setSelected(!selected)
    clickHandle(activityData)
  }

  return (
    <Card sx={{ width: 350, cursor: 'pointer' }} onClick={handleClick}>
      <CardContent sx={{ height: '250px', backgroundImage: `url(${activityData.imageURL})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <CardActions sx={{ height: '100%', width: '100%', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
          <Typography variant="h5" sx={{ mb: 3, p: 2, color: '#fff', backgroundColor: '#3a393986', borderRadius: 2 }}>{activityData.name}</Typography>
        </CardActions>
      </CardContent>
    </Card>
  );
}

ActivityCard.propTypes = {
  clickHandle: PropTypes.func,
  activityData: PropTypes.object
}