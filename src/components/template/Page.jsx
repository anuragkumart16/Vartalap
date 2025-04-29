import React from 'react'
import Navbar from '../molecule/Navbar'

function Page({children}) {
  return (
    <>
    <Navbar/>
    {children}
    </>
  )
}

export default Page
