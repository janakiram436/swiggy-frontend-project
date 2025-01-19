import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginUser from './swiggyInterface/swiggyComponents/LoginUser';
import UserRegister from './swiggyInterface/swiggyComponents/UserRegister';
import { Routes, Route } from 'react-router-dom';
import SwiggyLandingPage from './swiggyInterface/swiggyPages/SwiggyLandingPage'
import './App.css'
import "./index.css"
import ProductMenu from './swiggyInterface/swiggyComponents/ProductMenu'
import LandingPage from './vendorDashboard/pages/LandingPage'
import NotFound from './vendorDashboard/components/NotFound'
const App = () => {
  return (
     <>
        <Routes>
          <Route path="/" element = {<LoginUser/>}/>
          <Route path="/signup" element = {<UserRegister/>}/>
          <Route path='/home' element = { <SwiggyLandingPage/>} />
          <Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />
          <Route path = "/vendor" element = {<LandingPage/>}/>
          <Route path='/*' element = {<NotFound />} />
        </Routes>
     </>
  )
}

export default App

//<Route path="/signup" element = {<UserRegister/>}/>
//<Route path='/home' element = { <LandingPage />} />
//<Route path='/products/:firmId/:firmName' element = {<ProductMenu />} />