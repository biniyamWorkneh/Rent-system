import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "../src/Maincomponents/Home"
import Detail from './Detail'
import Services from './Maincomponents/Services'

const RouterPage = () => {
  return (
    <div>
        <Routes>
            <Route exact path="/" element ={<Home/>}/>
            <Route path = "/detail/:id" element={<Detail/>}/>
            <Route path='/service' element={<Services/>}/>
        </Routes>

    </div>
  )
}

export default RouterPage