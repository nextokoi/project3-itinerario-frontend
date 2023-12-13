import { useState, useEffect } from 'react'
import './App.css'
import { getAllUsers } from './services/userService'
import { signup, login } from './services/authService'
import { RouterProvider } from 'react-router-dom'
import router from './router'

import { countryContext } from './contexts/countryContext'

function App() {

  const [destinations, setDestinations] = useState('')
  const [origins, setOrigins] = useState('')

  const contextCountries = { origins, setOrigins, destinations, setDestinations }

  console.log("ooo", origins)
  console.log("ddd", destinations)

  useEffect(() => {
    const fetchData = async () => {

      await login({
        "email": "peter@gmail.com",
        "password": "111111111",
      })

      await getAllUsers()
    }
    fetchData()
  }, [])



  return (
    <>
      <countryContext.Provider value={contextCountries}>
        <RouterProvider router={router} />
      </countryContext.Provider>
    </>
  )
}

export default App
