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
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'end', my: 10, backgroundImage: `url(${destinationImg})`, height: '400px', width: '60%', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: 2, }}>
            <Box
              sx={{
                backgroundColor: 'rgba(95, 95, 95, 0.7)',
                color: '#fff',
                width: 'fit-content',
                height: 'fit-content',
                padding: 2,
                borderRadius: 2,
                mb: 6,
                ml: 3
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