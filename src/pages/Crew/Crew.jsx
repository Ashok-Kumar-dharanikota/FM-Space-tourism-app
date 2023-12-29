import React from 'react'
import './Crew.css';
import Title from '../../components/Title/Title';
import data from '../../data/data';
import CrewComponent from '../../components/CrewComponent';

function Crew() {

  const crewList = data.crew;

  return (
    <section className='crew-page'>

      <Title page={"02"} title={"Meet your crew"} />


      <CrewComponent crewList={crewList} />

    </section>
  )
}

export default Crew