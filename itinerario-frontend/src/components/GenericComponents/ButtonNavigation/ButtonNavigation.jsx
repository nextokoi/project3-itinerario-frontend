import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

//Botón para la navegación entre secciones del stepper -> Back - Next
function ButtonNavigation({text, bgColor, textColor}) {
  return (
    <Button variant='contained' sx={{backgroundColor: `${bgColor}`, color: `${textColor}`, padding: '15px'}}>
        {text}
    </Button>
  )
}

ButtonNavigation.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}


export default ButtonNavigation