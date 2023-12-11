import { useState,useEffect } from 'react'
import './App.css'
import {getAllUsers} from './services/userService'
import { signup,login } from './services/authService'

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
      <h1>Queso</h1>
    </>
  )
}

export default App
