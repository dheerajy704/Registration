import { useState , React } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/style.css';
import Signup from './Signup'
import Login from './Login'
import Home from './Home'
import Nav from './Nav';
import Footer from "./Footer"
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Products from './Products';
import Reviews from './Reviews';


function App() {

  return (
    <>
    <Nav/>
    
     
      <BrowserRouter>
        <Routes>
          <Route path = '/' element = {<Signup/>}></Route>
          <Route path = '/login' element = {<Login/>}></Route>
          <Route path = '/Home' element = {<Home/>}></Route>
        </Routes>
        <Products/>
        <Reviews/>
        <Footer/>
      
      </BrowserRouter>
      
    </>
  )
}

export default App
