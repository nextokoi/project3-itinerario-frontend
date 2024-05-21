import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

function TravelersSearchBar({ label, labelText, radiusTopLeft, radiusBottomLeft, radiusBottomRight, radiusTopRight }) {
    const [quantity, setQuantity] = useState('');

    const handleChange = (event) => {
        setQuantity(event.target.value);
    };

    return (
        <Box sx={{ width: 200, ml: 0, mr: 0 }}>
            <FormControl fullWidth variant="outlined">
                <InputLabel id="quantity-label" sx={{
                    color: '#black', // Cambia el color del InputLabel
                    '&.Mui-focused': {
                        color: 'black', // Cambia el color del InputLabel cuando está enfocado
                    },
                }}>{labelText}</InputLabel>
                <Select

                    labelId="quantity-label"
                    id="quantity-selector"
                    value={quantity}
                    onChange={handleChange}
                    // label= {label}

                    sx={{
                        borderTopRightRadius: radiusTopRight,
                        borderBottomRightRadius: radiusBottomRight,
                        borderTopLeftRadius: radiusTopLeft,
                        borderBottomLeftRadius: radiusBottomLeft,
                        backgroundColor: '#fff', // Cambia el color de fondo
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: '', // Cambia el color del borde fijo
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#FABD00', // Cambia el color del borde al pasar el ratón
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#FABD00', // Cambia el color del borde al enfocarse
                        },
                        '& .MuiInputBase-input': {
                            color: '#00201c', // Cambia el color de la fuente del input
                        },
                    }}


                >
                    {[...Array(10).keys()].map((value) => (
                        <MenuItem key={value + 1} value={value + 1}>
                            {value + 1}
                        </MenuItem>
                    ))}

                </Select>
            </FormControl>
        </Box>
    );
}

export default TravelersSearchBar