import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Footer } from '../components/Footer/Footer'
import { Outlet } from 'react-router'

export default function LayoutPrincipal() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer/>
    </>
  )
}
