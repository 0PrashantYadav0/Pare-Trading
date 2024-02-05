import React from 'react'
import Logo from "../assets/Logo.png";


function LogoP({className}) {
  return (
      <img src={Logo} alt="logo" className={`w-8 h-8 sm;w-10 sm-h-10 ${className}`}/>
  )
}

export default LogoP
