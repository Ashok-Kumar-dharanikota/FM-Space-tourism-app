import React from 'react'
import HeadingThree from './HeadingThree'
import BodyText from './BodyText/BodyText';

const CrewComponent = ({ crewList }) => {

  const crew = crewList[0];


  return (
    <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'absolute', width: '100%'}}>

      <div>
        <div>
          <h1 style={{ fontFamily: 'Bellefair', fontWeight: 'lighter', textTransform: 'uppercase', fontSize: 32, color: 'white', opacity: "50.42%", lineHeight: 2 }}>{crew.role}</h1>
          <HeadingThree text={crew.name} />
        </div>
        <BodyText text={crew.bio} />

      </div>

      <div>
        <img src={crew.images.png} style={{width: '100%', height: 554, objectFit: 'contain'}} alt="" />
      </div>
    </div>
    


  )
}

export default CrewComponent