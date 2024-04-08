import React, { useState } from 'react'
import{Link} from "react-scroll"
import { AiOutlineMenu } from "react-icons/ai";
import ho from "../assets/b1.png"
import './Nav.css'
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    const handleClick = ()=>{
        setShowMenu(!showMenu)
    }
  return (
    <nav>
      <div style={{fontSize:"25px",fontWeight:"bold", color:"white"}}> 
        <img src={ho} alt="" style={{height:'55px', borderRadius:"30px", width:"60px"}}/>
            House Rent
             </div>
        <ul className={showMenu ? "menu-active" : "menu"}>
            <li>
          <Link   to="house"spy={true}smooth={true} offset={-60}
               duration={60} >Home</Link>
            </li>
            <li>
            <Link   to="service" spy={true} smooth={true} offset={-60}
               duration={60}>Service</Link>  
              </li>
            <li>
            <Link   to="login"spy={true}smooth={true} offset={-60}
               duration={60}>Login</Link>            </li>
            <li>
            <Link   to="signup"spy={true}smooth={true} offset={-60}
               duration={60}>Signup</Link>            </li>
        </ul>
        <div className="menu-icon" onClick={handleClick}>
        <AiOutlineMenu />
      </div>
    </nav>
  )
}

export default Navbar