import { Box } from '@mui/material'
import PropTypes from 'prop-types'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function SearchBar({placeholder}) {
  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label} 
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params }
          label={placeholder}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
          sx={{backgroundColor: '#fff'}}
        />
      ) }
    />
  );
}

const countries = [
    {
        code: 'FR',
        label: 'France',
        suggested: true,
    },
    {
        code: 'JP',
        label: 'Japan',
        suggested: true,
    },
    {
        code: 'CA',
        label: 'Canada',
        suggested: true,
    },
    { 
        code: 'ES', 
        label: 'Spain', 
    },
    { 
        code: 'BR', 
        label: 'Brazil',
    }
];


SearchBar.propTypes = {
    placeholder: PropTypes.string
}

export default SearchBar
