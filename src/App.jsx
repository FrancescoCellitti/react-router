import { useState } from 'react'
import Header from './components/header'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from './pages/Homepage'
import ProductsPage from './pages/ProductsPage'
import AboutUs from './pages/AboutUsPage'
import DefaultLayout from './layout/DefaultLayout'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>

      <Route Component={DefaultLayout}>
        <Route index Component={HomePage}></Route>
         <Route path='/Abouth_Us' Component={AboutUs}></Route>
        <Route path='/products' Component={ProductsPage}></Route> 

      </Route>





    </Routes>
    
    
    
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
