import { useState, useEffect } from 'react'
import './App.css'
import { getAllUsers } from './services/userService'
import { signup, login } from './services/authService'
import { RouterProvider } from 'react-router-dom'
import router from './router'

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

  useEffect(() => {
    const fetchData = async () => {

      await login({
        "email": "dani@gmail.com",
        "password": "12345678",
      })

      // await getAllUsers()
    }
    fetchData()
  }, [])



  return (
    <>
      <mainContext.Provider value={data}>
        <RouterProvider router={router} />
      </mainContext.Provider>
    </>
  )
}

export default App
