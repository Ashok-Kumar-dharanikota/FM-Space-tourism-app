import React from 'react'
import HeadingThree from './HeadingThree'
import BodyText from './BodyText/BodyText'

const TechnologyComponent = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginLeft: 150}}>
            <div style={{gap: 10}}>
                <div style={{width: 80, height: 80, borderRadius: '50%', border: "1px solid white", color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Bellefair', fontSize: 32,}}>1</div>
                <div>2</div>
                <div>3</div>
            </div>

            <div>
                <p></p>
                <HeadingThree />

                <BodyText />
            </div>
        </div>
    )
}

export default TechnologyComponent