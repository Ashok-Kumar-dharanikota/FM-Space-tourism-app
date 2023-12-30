import React, { useState } from 'react'
import style from './Technology.module.css'
import Title from '../../components/Title/Title'
import TechnologyComponent from '../../components/TechnologyComponent'
import HeadingThree from '../../components/HeadingThree'
import BodyText from '../../components/BodyText/BodyText'
import data from '../../data/data';

function Technology() {

  const [num, setNum] = useState(0);

  const space = data.technology;

  const handleClick = (val) => {
    setNum(val);
  }

  return (
    <section className={style.technologyPage}>

      <Title page={"03"} title={"Space launch 101"} />

      <div className={style.techcontainer}>
        <div className={style.leftcontainer}>
          <div style={{gap: 24, display: 'flex', flexDirection: 'column'}}>
            <div onClick={() => handleClick(0)} style={{color: num === 0 ? 'black' : 'white', backgroundColor: num === 0 ? 'white' : 'transparent'}} className={style.num}>1</div>
            <div onClick={() => handleClick(1)} style={{color: num === 1 ? 'black' : 'white', backgroundColor: num === 1 ? 'white' : 'transparent'}} className={style.num}>2</div>
            <div onClick={() => handleClick(2)} style={{color: num === 2 ? 'black' : 'white', backgroundColor: num === 2 ? 'white' : 'transparent'}} className={style.num}>3</div>
          </div>

          <div>
            <p style={{ fontSize: 16, fontFamily: 'Barlow Condensed', letterSpacing: 2.7}}>THE TERMINOLOGY…</p>
            <HeadingThree text={space[num].name}/>
            <BodyText text={space[num].description}/>
          </div>

        </div>

        <img src={space[num].images.portrait} alt="" />
      </div>

    </section>
  )
}

export default Technology