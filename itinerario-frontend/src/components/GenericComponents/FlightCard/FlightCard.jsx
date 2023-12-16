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
import { useState } from 'react';

export default function FlightCard({ data, classIcon, date, onSelect, isSelected }) {

    const [selected, setSelected] = useState(false)

    const handleClick = () => {
        setSelected(!selected)
        onSelect && onSelect(data, !selected)
    }

    return (

        <Card sx={{ minWidth: 275, marginY: '10px', maxWidth: 450, cursor: 'pointer', "&:hover":{border: '3px solid green'}}} className={isSelected ? 'selected' : 'unselected'} onClick={handleClick}>
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
                            {data.airline_main}
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
    date: PropTypes.string,
    onSelect: PropTypes.func,
    isSelected: PropTypes.bool
}