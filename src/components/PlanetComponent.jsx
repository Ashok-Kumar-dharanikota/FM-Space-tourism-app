import React, { useState } from 'react'
import HeadingTwo from './HeadingTwo/HeadingTwo'
import MOON from './../assets/planets/image-moon.png';
import data from '../data/data';

const PlanetComponent = () => {

    const [num, setNum] = useState(0);

    const handleClick = (val) => {
        setNum(val);
    }

    const planet = data.destinations[num];

    return (
        <div style={{ display: 'flex', marginTop: 90, justifyContent: 'space-between', marginLeft: 300, marginRight: 250, alignItems: 'center' }}>
            <img style={{ width: 400, height: 400 }} src={planet.images.png} alt="Planet" />

            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <div>
                    <nav className='planet-navbar'>
                        <span className='planet-navbar-item' to={"/destination"} onClick={() => handleClick(0)} >Moon</span>
                        <span className='planet-navbar-item' to={"/destination"} onClick={() => handleClick(1)}>Mars</span>
                        <span className='planet-navbar-item' to={"/destination"} onClick={() => handleClick(2)}>Europa</span>
                        <span className='planet-navbar-item' to={"/destination"} onClick={() => handleClick(3)}>Titan</span>

                    </nav>


                </div>


                <HeadingTwo text={planet.name} />
                <p>{planet.description}</p>

                <div style={{ width: 400, height: 1, backgroundColor: '#383B4B', marginTop: 50 }}></div>

                <div style={{ display: 'flex', width: 400, marginTop: 20 }}>
                    <div style={{ width: 200 }}>
                        <p style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 2.36 }}>Avg. Distance</p>
                        <h5 style={{ color: 'white', fontSize: 28, fontFamily: 'Bellefair', fontWeight: 'lighter', textTransform: 'uppercase' }}>{planet.distance}</h5>
                    </div>

                    <div style={{ width: 200 }}>
                        <p style={{ fontSize: 14, textTransform: 'uppercase', letterSpacing: 2.36 }}>Est. travel time</p>
                        <h5 style={{ color: 'white', fontSize: 28, fontFamily: 'Bellefair', fontWeight: 'lighter', textTransform: 'uppercase' }}>{planet.travel}</h5>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PlanetComponent