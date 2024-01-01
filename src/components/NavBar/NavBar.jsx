import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import menu from '../../assets/icon-hamburger.svg'
import close from '../../assets/icon-close.svg'

//style
import style from './NavBar.module.css';

function NavBar() {

  const [sidenav, setsidenav] = useState(false);


  const handleClick = () => {
    setsidenav(!sidenav);
  }

  return (
    <nav className={style.navbar}>

      <img src={logo} alt="" />

      <div className={style.container}>
        <div className={style.line}>

        </div>

        <div style={{display: sidenav ? 'none' : 'block'}} className={style.list_container}>
          <ul className={style.list}>
            <li className={style.item}><NavLink to="/" ><span>00</span>Home</NavLink></li>
            <li className={style.item}><NavLink to="/destination" ><span>01</span>Destination</NavLink></li>
            <li className={style.item}><NavLink to="/crew" ><span>02</span>Crew</NavLink></li>
            <li className={style.item}><NavLink to="/technology" ><span>03</span>Technology</NavLink></li>

          </ul>
        </div>

      </div>
 
      <img onClick={handleClick} className={style.closeandopen} src={sidenav ? close : menu} alt="" />

    </nav>

  )
}

export default NavBar