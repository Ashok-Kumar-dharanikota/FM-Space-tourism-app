import React from 'react'
import './Destination.css'
import Moon from './../../assets/image-moon.png';
import Title from '../../components/Title/Title';
import Planet from '../../components/Planet/Planet';
import data from '../../data/data.json';
import { Link } from 'react-router-dom';

function Destination() {


  return (
    <section className='destinationpage'>


    <Title page={"01"} title={"Pick your destination"}/>

    {/* <nav className='planet-navbar'>
       <Link className='planet-navbar-item' to={"/destination"} >Moon</Link>
       <Link to={"/destination"} >Mars</Link>
       <Link to={"/destination"} >Europa</Link>
       <Link to={"/destination"} >Titan</Link>

    </nav> */}

    <Planet image={Moon} />

      {/* <div className='destinationpage-container'>

        <img className='moon-img' src={Moon} alt="moon" />

        <div className='destinationpage-right'>

          <h1>Moon</h1>


        </div>


      </div> */}



    </section>
  )
}

export default Destination