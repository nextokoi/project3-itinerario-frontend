import { Box, Typography } from "@mui/material"
import BasicBreadcrumbs from "../../GenericComponents/BreadCrumbs/BreadCrumbs"
import CustomizedSteppers from "./../../GenericComponents/Stepper/Stepper"
import PropTypes from 'prop-types'
import { useContext } from "react"
import { mainContext } from "../../../contexts/mainContext"


function HeaderPlanning({ stepperStatus }) {

  const { mainData } = useContext(mainContext)
  const destinationImg = mainData.destination.imageURL

  return (
    <div>
      <Box sx={{ margin: '30px' }}>
        <BasicBreadcrumbs />
      </Box>

      <Box>
        <CustomizedSteppers stepperStatus={stepperStatus} />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', my: 10 }}>
        <Box
          sx={{
            position: 'relative',
            width: '50%',
            height: '50%',
          }}
        >
          <Box
            component="img"
            alt="Descripción de la imagen"
            src={destinationImg}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: "column",
              justifyContent: 'end',
              gap: '10px',
              pb: 15,
              pl: 5,
              color: '#fff',
            }}
          >
            <Typography variant="h4">{mainData.destination.name}</Typography>
            <Typography variant="h5">{mainData.destination.country}</Typography>
          </Box>
        </Box>
      </Box>

    </div>
  )
}

HeaderPlanning.propTypes = {
  stepperStatus: PropTypes.number
}

export default HeaderPlanning