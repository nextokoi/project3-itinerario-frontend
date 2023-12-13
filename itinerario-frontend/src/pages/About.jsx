import { useState, useEffect, useContext } from 'react'
import { countryContext } from "../contexts/countryContext"

function About() {

  const { origins, setOrigins, destinations, setDestinations } = useContext(countryContext)

  console.log("about ", origins)

  return (

    <div>About</div>

  )
}

export default About