import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import AdminPage from './components/AdminPage'
import AdminProductAdd from './components/AdminProductAdd'
import SingleProducts from './components/SingleProducts'
import ProductEdit from './components/ProductEdit'



function App() {
  return (
   <>
   {/* <BrowserRouter> */}
   <Routes>
    <Route  path='/home' element={<Home/>} />
    <Route  path='/login' element={<Login/>} />
    <Route  path='/signup' element={<Signup/>} />
    <Route  path='/adminhome' element={<AdminPage/>} />
    <Route  path='/productadd' element={<AdminProductAdd/>} />
    <Route  path='/product' element={<SingleProducts/>} />
    <Route  path='/productedit' element={<ProductEdit/>} />

    
    


    
   </Routes>
   {/* </BrowserRouter> */}
 
   </>
  )
}

export default App
