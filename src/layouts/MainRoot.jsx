import React from 'react'
import { Outlet } from 'react-router-dom'
import Top from '../components/Top'
// import Header from '../components/Header'

const MainRoot = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Top />
      {/* <Header /> */}
      <main className='grow'>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default MainRoot