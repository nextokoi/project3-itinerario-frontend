import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import PropTypes from 'prop-types'


export default function FlightCardSummary({ date, origin, originCode, destination, destinationCode, price, duration, airlineName, flightNum, airlineCode, departTime, airlineLogo }) {

    return (
        <Card sx={{ py: 3, px: 1, minWidth: 300, maxWidth: 500 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px' }}>
                        <img src={airlineLogo} alt="" width={30} />
                        <Typography variant='body2'>
                            {airlineName}
                        </ Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            {airlineCode}{flightNum}
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            {date}
                        </Typography>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            {departTime}
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ marginY: '20px' }} />

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '20px' }}>
                    <Box>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            {originCode}
                        </Typography>
                        <Typography>
                            {origin}
                        </Typography>
                    </Box>
                    <Box>
                        <AirplanemodeActiveIcon fontSize="small" className="rotateRight" sx={{ fontSize: '60px', color: '#1976d2' }} />
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>
                            {destinationCode}
                        </Typography>
                        <Typography>
                            {destination}
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end' }}>

                    <Typography variant='h5' sx={{ mb: '5px' }}> {price} € </Typography>
                    <Typography> {duration}</Typography>

                </Box>
            </CardContent>
        </Card>
    );
}

FlightCardSummary.propTypes = {
    date: PropTypes.string,
    origin: PropTypes.string,
    originCode: PropTypes.string,
    destination: PropTypes.string,
    destinationCode: PropTypes.string,
    price: PropTypes.number,
    duration: PropTypes.string,
    airlineName: PropTypes.string,
    airlineCode: PropTypes.string,
    departTime: PropTypes.string,
    flightNum: PropTypes.number,
    airlineLogo: PropTypes.string

}

