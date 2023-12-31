import React from 'react'
import './Home.css'
import AnimatedTextWord from '../../components/AnimatedTextWord'
import HeadingOne from '../../components/HeadingOne/HeadingOne'
import BodyText from '../../components/BodyText/BodyText'


function Home() {

  const home = {
    title: "SO, you want to travel to",
    name: "space",
    description: "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!",
  };


  return (
    <section className='homepage'>

      <div className='homepage-container'>
        <div className='container-left'>
          {/* <AnimatedTextWord text={home.title} /> */}
          <p className='homepage-title'>{home.title}</p>
          <HeadingOne text={home.name} />
          <BodyText text={home.description} />

        </div>


        <div className='container-right'>
          Explore
        </div>

      </div>
    </section>
  )
}

export default Home