import React from 'react'
import NavBar from '../components/NavBar/NavBar'

export default function LayoutPrincipal({children}) {
  return (
    <>
      <NavBar />

      {children}
    </>
  )
}
