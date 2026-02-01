import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Product from './pages/Product'
import Layout from './Layout/Layout'


function App() {
  return (
    <>
    <Routes>
      <Route element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
       <Route path="product" element={<Product/>}/>
       </Route>


    </Routes>
    
    </>
  )
}

export default App