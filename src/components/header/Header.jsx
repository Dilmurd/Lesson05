import React from 'react'
import "./Header.css"
import logo from "../../assets/615px-Food_Network_New_Logo 2.svg"
import { FaSearch,FaShoppingCart,FaUser } from 'react-icons/fa'

const nav = ["Home","About us","Menu","Features","Contact us"]


function Header() {
  const items =     nav.map((i,inx)=>(
    <li key={inx} className="navbar__item">
      <a href="#" className="navbar__link">
        <span>{i}</span>
      </a>
    </li>
      ))
  return (
    <header>
      <div className="container">
        <nav className='navbar'>
          <div className="navbar__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="navbar__collection">{items}</ul>
          <button className='navbar__btn'>Booking Now</button>
          <div className="navbar__icons">
            <FaSearch/>
            <FaShoppingCart/>
            <FaUser/>
          </div>
          <div className="navbar__burger">
            <span className='item'></span>
            <span className='item'></span>
            <span className='item'></span>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header