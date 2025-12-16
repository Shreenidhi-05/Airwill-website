import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserLayout from './components/layout/UserLayout'
import Home from './pages/Home'
import Product from './pages/Product'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home/>}/>
          <Route path="products/" element={<Product/>}/>
          <Route path="contact/" element={<Contact/>}/>
        </Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
