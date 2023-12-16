import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import DiamondIcon from '@mui/icons-material/Diamond';
import './FlightCard.css'
import PropTypes from 'prop-types'

export default function FlightCard({ data, classIcon, date }) {


    return (

        <Card sx={{ minWidth: 275, border: '1px solid #1976d2', marginY: '10px', maxWidth: 450 }} className='unselected'>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'start', padding: '15px', gap: '20px' }}>

                    <Box>
                        <Typography>
                            <DiamondIcon fontSize="large"></DiamondIcon>
                        </ Typography>
                        <Typography fontSize='8px'>
                            company logo
                        </ Typography>
                    </Box>

                    <Box>
                        <Typography>
                            {data.flightCompanyName}
                        </Typography>
                        <Typography>
                            <strong>{date}</strong>
                        </Typography>
                    </Box>

                </Box>

                {/* border: '1px solid #1976d2',  */}

                <Divider sx={{ marginY: '10px' }} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '15px', alignItems: 'start' }}>

                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', width: '20%', paddingLeft: '10px' }}>
                        <Typography>
                            <strong>{data.origin}</strong>
                        </Typography>
                        <Typography>
                            Nombre País
                        </Typography>
                    </Box>

                    <Box sx={{ height: '100%', paddingY: '50px' }}>
                        <AirplanemodeActiveIcon fontSize="small" className={classIcon} sx={{ fontSize: '60px', color: '#1976d2' }} />
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start ', width: '20%' }}>
                        <Typography>
                            <strong>{data.destination}</strong>
                        </Typography>
                        <Typography>
                            Nombre País
                        </Typography>
                    </Box>

                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'end', paddingRight: '50px' }}>

                    <Typography><strong>{data.value} €</strong></Typography>
                    {/* <Typography><strong>{data.price} €</strong></Typography> */}
                    <Typography>Duration: {data.duration}</Typography>

                </Box>

            </CardContent>

            <CardActions>
            </CardActions>

        </Card>
    );
}

FlightCard.propTypes = {
    data: PropTypes.object,
    classIcon: PropTypes.string,
    date: PropTypes.string
}