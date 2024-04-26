import React from 'react'
import { useState } from 'react'
import Sidebar from '../Sidebar'
import { products } from '../data/data'
import Cards from '../Cards'
import './Home.css'

const Home = () => {
 const [search, setSearch]= useState("")
 return(
  <div> 
    <div className='inlput'>
    <input type="text" placeholder='search here' className='texto' onChange={(event)=>{
      setSearch(event.target.value)
    }}  /></div>
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
          imageSrc={product.imageSrc1}
          price={product.price}
          location={product.location}
          />)
     
      })
    }
  </div>
 )


}

export default Home