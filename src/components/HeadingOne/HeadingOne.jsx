import React from 'react'

const HeadingOne = ({ text }) => {

    return (
        <h1 style={{fontFamily: 'Bellefair', fontWeight: 'lighter', textTransform: 'uppercase', fontSize: 150, color: 'white'}}>{text}</h1>
    )
}

export default HeadingOne;