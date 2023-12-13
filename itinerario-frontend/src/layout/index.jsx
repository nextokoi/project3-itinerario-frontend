import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import { Box } from "@mui/material"

export default function Root() {
  return (
    <Box sx={{display: 'grid', height: '100%', minHeight: '100vh', gridTemplateRows: '60px 1fr 80px'}}>
        <Header/>
        <Outlet />
        <Footer/>
    </Box>
  )
}