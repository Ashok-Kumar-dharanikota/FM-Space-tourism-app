import React, { useState } from 'react'
import HeadingThree from './HeadingThree'
import BodyText from './BodyText/BodyText';

const CrewComponent = ({ crewList }) => {

  const [num, setNum] = useState(0);

  const crew = crewList[num];

  const handleItemClick = (val) => {
    setNum(val)
  }

  return (
    <div style={{ display: 'flex', overflowX: 'auto', scrollSnapType: "x mandatory", scrollBehavior: 'smooth' }}>
     
        <>
          <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative', width: '100%', flex: "1 0 100%", scrollSnapAlign: 'start' }}>

            <div>
              <div>
                <h1 style={{ fontFamily: 'Bellefair', fontWeight: 'lighter', textTransform: 'uppercase', fontSize: 32, color: 'white', opacity: "50.42%", lineHeight: 2 }}>{crew.role}</h1>
                <HeadingThree text={crew.name} />
              </div>
              <BodyText text={crew.bio} />

              <ul style={{ width: 200, height: 50, display: 'flex', gap: 24, marginTop: 50}}>
                <li onClick={() => handleItemClick(0)} style={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: '50%', cursor: 'pointer', listStyle: 'none', opacity: num ===0 ? 1 : 0.5 }}></li>
                <li onClick={() => handleItemClick(1)} style={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: '50%', cursor: 'pointer', listStyle: 'none', opacity: num ===1 ? 1 : 0.5  }}></li>
                <li onClick={() => handleItemClick(2)} style={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: '50%', cursor: 'pointer', listStyle: 'none', opacity: num ===2 ? 1 : 0.5  }}></li>
                <li onClick={() => handleItemClick(3)} style={{ width: 10, height: 10, backgroundColor: 'white', borderRadius: '50%', cursor: 'pointer', listStyle: 'none', opacity: num ===3 ? 1 : 0.5  }}></li>

              </ul>



            </div>

            <div>
              <img src={crew.images.png} style={{ width: 500, height: 554, objectFit: 'contain' }} alt="" />
            </div>
          </div>
        </>
   



    </div >


  )
}

export default CrewComponent
