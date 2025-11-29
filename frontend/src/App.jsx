import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          {/*user layout*/}
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
