import React from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route } from 'react-router-dom';

// pages 
import Home from './pages/Home';
import Contact from './pages/Contact';

// layouts 
import MainRoot from './layouts/MainRoot';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainRoot />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App