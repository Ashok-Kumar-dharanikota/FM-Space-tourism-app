import React from 'react'
import './Destination.css'
import Moon from './../../assets/image-moon.png';

function Destination() {
  return (
    <section className='destinationpage'>



      <h4>Pick your Destination</h4>


      <div className='destinationpage-container'>

        <img className='moon-img' src={Moon} alt="moon" />

        <div className='destinationpage-right'>

          <h1>Moon</h1>

          <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

        </div>


      </div>



    </section>
  )
}

export default Destination