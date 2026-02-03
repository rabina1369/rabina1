import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Product from './pages/Product'
import Login from './pages/Login'
import Layout from './Layout/Layout'


function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
       <Route path="product" element={<Product/>}/>
       

       </Route><Route path="Login" element={<Login/>}/> 


    </Routes>
    
    </>
  )
}

export default App