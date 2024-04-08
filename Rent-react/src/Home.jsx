import React from 'react'
import { useState } from 'react'
import Sidebar from './Sidebar'
import { products } from './data/data'
import Cards from './Cards'


const Home = () => {
 const [search, setSearch]= useState("")
 return(
  <div> 
    <div className='inlput' style={{display:"flex",justifyContent:"center",alignItems:"center", margin:"0 auto", float:"right"}}>
    <input type="text" placeholder='search here' onChange={(event)=>{
      setSearch(event.target.value)
    }}  style={{borderRadius:"30px", width:"350px", textAlign:"center", height:"50px",marginTop:'20px', marginRight:"506px"}}/></div>
    {
      products.filter((val)=>{
        if(search ===""){
          return val }
          else if (val.location.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
            return val
          } return null
      }).map((product)=>{
      return(
          <Cards
          key= {product.id}
          id = {product.id}
          imageSrc={product.imageSrc}
          price={product.price}
          location={product.location}
          />)
     
      })
    }
  </div>
 )


}

export default Home