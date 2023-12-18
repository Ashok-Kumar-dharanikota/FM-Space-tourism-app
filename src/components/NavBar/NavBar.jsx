import React from 'react'
import './NavBar.css'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

function NavBar() {
  return (
    <div className='navbar-section'>
      <img src={logo} alt="Logo" />
    <nav className='NavBar'>
    <NavLink className='item' to='/'>Home</NavLink>
    <NavLink className='item' to='/destination'>destination</NavLink>
    <NavLink className='item' to='/crew'>Crew</NavLink>
    <NavLink className='item' to='/technology'>Technology</NavLink>
  </nav>
  </div>
)
}

export default NavBar