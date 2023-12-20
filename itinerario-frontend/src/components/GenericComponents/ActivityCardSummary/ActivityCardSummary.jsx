import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


export default function ActivityCardSummary({ activityImg, activityTitle }) {

    return (
        <Card sx={{ height: 150, width: 350, display: 'flex', alignItems: 'center', mb: 2 }} >
            <CardMedia sx={{ objectFit: 'cover', width: '100%', height: '100%' }} image={activityImg} />
            <CardContent sx={{ width: '100%' }}>
                <Typography variant="body2">{activityTitle}</Typography>
            </CardContent>
        </Card>
    )
}

ActivityCardSummary.propTypes = {
    activityTitle: PropTypes.string,
    activityImg: PropTypes.string
}