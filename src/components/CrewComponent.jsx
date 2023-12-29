import React from 'react'
import HeadingThree from './HeadingThree'
import BodyText from './BodyText/BodyText';

const CrewComponent = ({ crewList }) => {

  // const crew = crewList[0];


  return (
    <div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: "x mandatory", scrollBehavior: 'smooth'}}>
      {crewList.map((crew) => (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative', width: '100%', flex: "1 0 100%", scrollSnapAlign: 'start'}}>

            <div>
              <div>
                <h1 style={{ fontFamily: 'Bellefair', fontWeight: 'lighter', textTransform: 'uppercase', fontSize: 32, color: 'white', opacity: "50.42%", lineHeight: 2 }}>{crew.role}</h1>
                <HeadingThree text={crew.name} />
              </div>
              <BodyText text={crew.bio} />

            </div>

            <div>
              <img src={crew.images.png} style={{ width: 500, height: 554, objectFit: 'contain' }} alt="" />
            </div>
          </div>
        </>
      ))}

      {/* <div style={{position: 'absolute', width: 200, height: 50, bottom: 0, marginLeft: 120, marginBottom: 30, backgroundColor: 'white'}}>

      </div> */}

    </div >


  )
}

export default CrewComponent

{/* <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative', width: '100%' }}>

        <div>
          <div>
            <h1 style={{ fontFamily: 'Bellefair', fontWeight: 'lighter', textTransform: 'uppercase', fontSize: 32, color: 'white', opacity: "50.42%", lineHeight: 2 }}>{crew.role}</h1>
            <HeadingThree text={crew.name} />
          </div>
          <BodyText text={crew.bio} />

        </div>

        <div>
          <img src={crew.images.png} style={{ width: '100%', height: 554, objectFit: 'contain' }} alt="" />
        </div>
      </div>

    </div> */}
