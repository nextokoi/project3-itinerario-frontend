import { useState,useEffect } from 'react'
import './App.css'
import {getAllUsers} from './services/userService'
import { signup,login } from './services/authService'
import { RouterProvider } from 'react-router-dom'
import router from './router'

function App() {

  useEffect(()=>{
    const fetchData = async () =>{
      await login({
        "email" : "dani@gmail.com",
        "password" : "12345678",
      })
      await getAllUsers()
    } 
    fetchData()
  },[])


  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
