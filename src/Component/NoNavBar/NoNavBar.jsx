import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const NoNavBar = ({ children }) => {

  const location = useLocation();

  const [nonavbar, setNonavbar] = useState(false)

  useEffect(() => {
    console.log("this is location:", location)
    if (location.pathname === '/NotFoundPage') {
      setNonavbar(false)
    } else {
      setNonavbar(true)
    }
      
  }, [location])

  return (
    <div>
      {nonavbar && children}
    </div>
  )
}

export default NoNavBar
