import React from 'react'
import './Home.css'
import AnimatedTextWord from '../../components/AnimatedTextWord'

function Home() {
  return (
    <section className='homepage'>

      <div className='homepage-container'>
        <div className='container-left'>
          {/* <h4>So, you want to travel to</h4> */}
          <AnimatedTextWord text="SO, you want to travel to" />
          <h1>Space</h1>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!</p>
        </div>

        <div className='container-right'>
            Explore
        </div>

      </div>
    </section>
  )
}

export default Home