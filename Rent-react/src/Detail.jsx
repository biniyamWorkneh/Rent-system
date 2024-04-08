import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from './data/data'
const Detail = () => {
//extracting the id parameter
    const {id}= useParams()
   // find the product with the match id 
   const product = products.find((product)=>product.id.toString() === id.toString())
   
    return (
    <div>
     {product?(
    <div className="card" style={{float:"left", width:'25rem',margin:"10% 50% 5% 35%",
    height:"500px"}}>
  <img src={`/${product.imageSrc}`} className="card-img-top" alt="..."/>
  <div className="card-body" style={{marginTop:"10px"}}>
    <h5 className="card-title" style={{margin:"10px"}}>Price: {product.price} birr</h5>
    <h5 className="card-text" style={{margin:"10px"}}>Location: {product.location}</h5>
    <h5 className="card-text" style={{margin:"10px"}}>SpLocation: {product.specificLocation}</h5>
    <h5 className="card-text" style={{margin:"10px"}}>Rooms: {product.internalRooms}</h5>
    <h5 className="card-text" style={{margin:"10px"}}>Price Is: {product.priceIs}</h5>


  </div>
</div>)
: ( 
        <p>No product found.</p>
      )}
    </div> 
  )
}

export default Detail