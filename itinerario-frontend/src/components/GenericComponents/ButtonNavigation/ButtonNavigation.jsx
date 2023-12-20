import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

//Botón para la navegación entre secciones del stepper -> Back - Next
function ButtonNavigation({ text, bgColor, textColor, handleNavigation }) {
  const handleClick = () =>{
    handleNavigation(text)
  }


  return (
    <Button variant='contained' onClick={handleClick} sx={{backgroundColor: `${bgColor}`, color: `${textColor}`, padding: 3, width: '180px'}}>
        {text}
    </Button>
  )
}

ButtonNavigation.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
    handleNavigation: PropTypes.func,
}


export default ButtonNavigation