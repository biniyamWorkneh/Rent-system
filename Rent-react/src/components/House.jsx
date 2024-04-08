import React from 'react'
import "./House.css"
import im  from "../assets/b1.avif"
const House = () => {
  return (
    <div className='house' id='house'>
      <img src={im} alt="" style={{marginTop:"57px",left:"0",width:"100%",height:"60vh"}}/>
      <h2><span>welcome </span></h2>
    </div>
  )
}

export default House