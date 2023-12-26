import React from 'react'
import HeadingThree from './HeadingThree'
import BodyText from './BodyText/BodyText';

const CrewComponent = ({ crewList }) => {

  const crew = crewList[0];


  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', position: 'absolute'}}>

      <div>
        <div>
          <h1 style={{ fontFamily: 'Bellefair', fontWeight: 'lighter', textTransform: 'uppercase', fontSize: 32, color: 'white', opacity: "50.42%" }}>{crew.role}</h1>
          <HeadingThree text={crew.name} />
        </div>
        <BodyText text={crew.bio} />

      </div>

      <div>
        <img src={crew.images.png} style={{}} alt="" />
      </div>
    </div>
    


  )
}

export default CrewComponent