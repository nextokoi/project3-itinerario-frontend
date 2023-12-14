import { Box } from "@mui/material"
import BasicBreadcrumbs from "../../GenericComponents/BreadCrumbs/BreadCrumbs"
import CustomizedSteppers from "./../../GenericComponents/Stepper/Stepper"


function HeaderPlanning() {
    const destinationImg = './../../public/photos/destinoEjemplo.jpg'
  return (
    <div>
            <Box sx={{ margin: '30px' }}>
                <BasicBreadcrumbs />
            </Box>

            <Box>
                <CustomizedSteppers />
            </Box>

            <Box sx={{
                backgroundImage: `url(${destinationImg})`,
                backgroundPosition: "center",
                marginY: "40px",
                height: "400px",
                width: "500px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                border: "1px solid #1976d2",
            }}>
            </Box>
    </div>
  )
}

export default HeaderPlanning