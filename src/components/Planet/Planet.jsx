import React from 'react'
import HeadingTwo from '../HeadingTwo/HeadingTwo'
import BodyText from '../BodyText/BodyText'
import { Link } from 'react-router-dom'
import './Planet.css';

const Planet = ({ image }) => {
  return (
    <div style={{ display: 'flex', marginTop: 90, justifyContent: 'space-between', marginLeft: 300, marginRight: 250, alignItems: 'center' }}>
      <img style={{ width: 400, height: 400 }} src={image} alt="" />

      <div style={{display: 'flex', flexDirection: 'column'}}>

        <div>
          <nav className='planet-navbar'>
            <span className='planet-navbar-item' to={"/destination"} >Moon</span>
            <span className='planet-navbar-item' to={"/destination"} >Mars</span>
            <span className='planet-navbar-item' to={"/destination"} >Europa</span>
            <span className='planet-navbar-item' to={"/destination"} >Titan</span>

          </nav>


        </div>
        <HeadingTwo text={"Moon"} />
        <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

        <div style={{ width: 400, height: 1, backgroundColor: '#383B4B', marginTop: 50 }}></div>

        <div style={{ display: 'flex', width: 400, marginTop: 20 }}>
          <div style={{ width: 200 }}>
            <p style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 2.36 }}>Avg. Distance</p>
            <h5 style={{ color: 'white', fontSize: 28, fontFamily: 'Bellefair', fontWeight: 'lighter', textTransform: 'uppercase' }}>384,400 km</h5>
          </div>

          <div style={{ width: 200 }}>
            <p style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 2.36 }}>Est. travel time</p>
            <h5 style={{ color: 'white', fontSize: 28, fontFamily: 'Bellefair', fontWeight: 'lighter', textTransform: 'uppercase' }}>3 days</h5>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Planet