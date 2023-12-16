import { Box } from '@mui/material'
import PropTypes from 'prop-types'

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { getAllLocations } from '../../../services/locationService';
import { useState, useEffect } from 'react';


function SearchBar({ placeholder, inputChange }) {

  const [locationData, setLocation] = useState([])

  const fetchData = async () => {
    const data = await getAllLocations()
    setLocation(data)
    console.log("Data: ", data)

  }

  useEffect(() => {
    fetchData()
  }, [])

  function handleInputChange(e) {

    let valueChosen = e.target.outerText
    const filteredData = locationData.filter((data) => {

      return data.name === valueChosen

    })

    inputChange(filteredData)

  }

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={locationData}
      autoHighlight
      getOptionLabel={(option) => option.name}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            // srcSet={`https://flagcdn.com/w40/${option.cityCode.toLowerCase()}.png 2x`}
            // src={`https://flagcdn.com/w20/${option.cityCode.toLowerCase()}.png`}
            alt=""
          />
          {option.name}
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

// const countries = [
//   {
//     code: 'FR',
//     label: 'France',
//     suggested: true,
//   },
//   {
//     code: 'JP',
//     label: 'Japan',
//     suggested: true,
//   },
//   {
//     code: 'CA',
//     label: 'Canada',
//     suggested: true,
//   },
//   {
//     code: 'ES',
//     cityCode: 'BCN',
//     label: 'Barcelona'
//   },
//   {
//     code: 'ES',
//     cityCode: 'MAD',
//     label: 'Madrid'
//   },
//   {
//     code: 'BR',
//     label: 'Brazil',
//   }
// ];


SearchBar.propTypes = {
  placeholder: PropTypes.string
}

export default SearchBar
