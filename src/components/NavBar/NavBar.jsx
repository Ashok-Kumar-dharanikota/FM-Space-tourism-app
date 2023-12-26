import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

//style
import style from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={style.navbar}>

      <img src={logo} alt="" />

      <div style={{display: 'flex', alignItems: 'center'}}>
        <div className={style.line}>

        </div>

        <ul className={style.list}>
          <li className={style.item}><NavLink to="/" ><span>00</span>Home</NavLink></li>
          <li className={style.item}><NavLink to="/destination" ><span>01</span>Destination</NavLink></li>
          <li className={style.item}><NavLink to="/crew" ><span>02</span>Crew</NavLink></li>
          <li className={style.item}><NavLink to="/technology" ><span>03</span>Technology</NavLink></li>

        </ul>

      </div>

    </nav>

  )
}

export default NavBar