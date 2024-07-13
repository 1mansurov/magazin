import React from 'react'
import NotFound from "./not-found/NotFound"
import Users from "./users/Users"
import Auth from "./auth/Auth"
import About from "./about/About"
import Home from "./home/Home"
import { Routes, Route } from 'react-router-dom';

const RouteController = () => {
  return (
    <>
      <Routes>
        <Route path="" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="auth" element={<Auth />}/>
        <Route path="Users" element={<Users/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default RouteController
