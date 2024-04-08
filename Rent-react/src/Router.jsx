import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import Detail from './Detail'

const RouterPage = () => {
  return (
    <div>
        <Routes>
            <Route exact path="/" element ={<Home/>}/>
            <Route path = "/detail/:id" element={<Detail/>}/>
        </Routes>

    </div>
  )
}

export default RouterPage