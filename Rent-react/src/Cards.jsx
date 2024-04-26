import React from 'react'
import { Link } from 'react-router-dom'
const Cards = ({id, imageSrc, price,location}) => {
  return (
<div>
     {/* <h1 style={{float:"left", marginLeft:"300px"}}>hello</h1>
     <img src={bini} alt="when teee" style={{float:"left"}} /> */}
      <div className="card" style={{float:"left", width:'16rem',marginLeft:"250px",
      marginTop:"90px", height:"340px",boxShadow:"0 0 5px rgba(0, 0, 0, 0.7)", marginBottom:"40px"}}>
    <img src={imageSrc} className="card-img-top" alt="..."/>
    <div className="card-body" style={{marginTop:"7px"}}>
      <h5 className="card-title" style={{margin:"7px"}}>Price: {price} birr</h5>
      <h5 className="card-text" style={{margin:"7px"}}>Location: {location}</h5>
    
    <Link className="btn btn-primary" to = {{pathname:`/detail/${id}`, state:{imageSrc}}}
     style={{margin:"10px"}}>

          See the interior
    </Link>
  </div>
</div>
    </div>  )
    
}
export default Cards