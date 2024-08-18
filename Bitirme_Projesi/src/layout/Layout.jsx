import React from 'react'
import { Outlet } from 'react-router-dom'
import NavigationBar from '../components/NavigationBar'


function Layout() {
  return (
    <div>
      <header>
        <NavigationBar />
      </header>
      <main><Outlet /></main>
      <footer>

      </footer>
    </div>
  )
}

export default Layout
