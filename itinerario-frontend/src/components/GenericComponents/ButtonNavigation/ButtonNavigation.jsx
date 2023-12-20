import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

//Botón para la navegación entre secciones del stepper -> Back - Next
function ButtonNavigation({ text, bgColor, textColor, hover, handleNavigation }) {
  const handleClick = () =>{
    handleNavigation(text)
  }


  return (
    <Button variant='contained' onClick={handleClick} sx={{backgroundColor: `${bgColor}`, color: `${textColor}`, padding: 3, width: '180px', border: '1px solid grey', "&:hover": { backgroundColor: `${hover}` }}}>
        {text}
    </Button>
  )
}

ButtonNavigation.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    hover: PropTypes.string,
    handleNavigation: PropTypes.func,
}


export default ButtonNavigation