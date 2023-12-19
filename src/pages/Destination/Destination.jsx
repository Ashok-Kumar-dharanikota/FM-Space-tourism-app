import React from 'react'
import './Destination.css'
import Moon from './../../assets/image-moon.png';
import Title from '../../components/Title/Title';
import Planet from '../../components/Planet/Planet';

function Destination() {
  return (
    <section className='destinationpage'>


    <Title page={"01"} title={"Pick your destination"}/>

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