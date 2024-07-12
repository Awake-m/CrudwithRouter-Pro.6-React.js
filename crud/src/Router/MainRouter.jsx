import React from 'react'
import Header from '../Componet/Header'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Shop from '../Pages/Shop'
import Product from '../Pages/Product'
import Blog from '../Pages/Blog'
import Page from '../Pages/Page'

function MainRouter() {

  return (
  
    <div>
      
      <Routes>
        <Route path='/' element={<Home/>}>Home</Route>
        <Route path='/Shop' element={<Shop/>}>Shop</Route>
        <Route path='/Product' element={<Home/>}>Product</Route>
        <Route path='/Blog' element={<Home/>}>Blog</Route>
        <Route path='/Page' element={<Home/>}>Page</Route>
       
      </Routes>
     
    </div>
  )
}

export default MainRouter
