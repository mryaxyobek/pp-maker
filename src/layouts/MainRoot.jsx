import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Top from '../components/Top'

const MainRoot = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Top />
      <Header />
      <main className='grow'>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  )
}

export default MainRoot