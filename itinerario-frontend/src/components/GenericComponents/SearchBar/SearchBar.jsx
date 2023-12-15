import { Box } from '@mui/material'
import PropTypes from 'prop-types'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getAllLocations } from '../../../services/locationService';
import { useContext, useEffect } from 'react';
import { mainContext } from '../../../contexts/mainContext';

function SearchBar({ placeholder, inputChange }) {

  const { mainData, setMainData } = useContext(mainContext)


  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
      const data = await getAllLocations()
      console.log(data)
  }

  function handleInputChange(e) {

    let valueChosen = e.target.outerText
    console.log(e)
    inputChange(valueChosen)

  }

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

          {...params}
          label={placeholder}
          inputProps={{
            ...params.inputProps,
            autoComplete: 'new-password', // disable autocomplete and autofill
          }}
          sx={{ backgroundColor: '#fff' }}

        />
      )}

      onChange={(option) => { handleInputChange(option) }}

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
    cityCode: 'BCN',
    label: 'Barcelona'
  },
  {
    code: 'ES',
    cityCode: 'MAD',
    label: 'Madrid'
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
