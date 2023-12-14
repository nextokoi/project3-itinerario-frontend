import { Box } from "@mui/material"
import BasicBreadcrumbs from "../../GenericComponents/BreadCrumbs/BreadCrumbs"
import CustomizedSteppers from "./../../GenericComponents/Stepper/Stepper"


function HeaderPlanning({stepperStatus}) {
    const destinationImg = './../../public/photos/destinoEjemplo.jpg'
  return (
    <div>
            <Box sx={{ margin: '30px' }}>
                <BasicBreadcrumbs />
            </Box>

            <Box>
                <CustomizedSteppers stepperStatus={stepperStatus} />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Box sx={{
                  backgroundImage: `url(${destinationImg})`,
                  backgroundPosition: "center",
                  marginY: "40px",
                  height: "600px",
                  width: "1000px",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain"
              }}>
              </Box>
            </Box>
    </div>
  )
}

export default HeaderPlanning