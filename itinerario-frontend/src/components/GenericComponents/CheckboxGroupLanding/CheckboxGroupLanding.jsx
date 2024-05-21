import React from 'react';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  '& .MuiSvgIcon-root': {
    fontSize: 15, // Ajusta este valor para cambiar el tamaño
    color: theme.palette.background.paper,
    borderRadius: '20%',
    backgroundColor: 'white',
  },
  '&.Mui-checked .MuiSvgIcon-root': {
    fontSize: 15, // Ajusta este valor para cambiar el tamaño
    color: theme.palette.primary.main,
    backgroundColor: 'white',
  },
}));

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: 'white', // Cambia el color del texto a blanco
  },
}));

export default function CheckboxGroupLanding({ text }) {
  return (
    <FormControl>
      <FormGroup
        aria-labelledby="demo-checkbox-group-label"
        name="checkbox-group"
      >
        <CustomFormControlLabel
          control={
            <CustomCheckbox
              icon={<CheckBoxOutlineBlankIcon />}
              checkedIcon={<CheckBoxIcon />}
            />
          }
          label={text}
        />
      </FormGroup>
    </FormControl>
  );
}