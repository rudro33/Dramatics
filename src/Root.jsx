import React from 'react'

import { Outlet } from 'react-router'
import Home from './layouts/Home'
import Navbar from './component/Navbar'

export default function Root() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet/>
    </div>
  )
}
