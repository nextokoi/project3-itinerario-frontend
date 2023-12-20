import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { customTheme } from './themes/custom'

import { mainContext } from './contexts/mainContext'

function App() {

  const [mainData, setMainData] = useState({
    travelPlanningName: '',
    dateGoing: '',
    dateBack: '',
    origin: {},
    destination: {},
    flightGoing: {},
    flightBack: {},
    activities: [],
    lodging: [],
    days : 0
  })

  const data = { mainData, setMainData }

/*   useEffect(() => {
    const fetchData = async () => {

      await login({
        "email": "dani@gmail.com",
        "password": "12345678",
      })

      // await getAllUsers()
    }
    fetchData()
  }, []) */



  return (
    <>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <mainContext.Provider value={data}>
          <RouterProvider router={router} />
        </mainContext.Provider>
      </ThemeProvider>
    </>
  )
}

export default App
