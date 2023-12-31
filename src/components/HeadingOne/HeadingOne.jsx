import React from 'react'
import style from './HeadingOne.module.css'

const HeadingOne = ({ text }) => {

    return (
        <h1 className={style.headingone}>{text}</h1>
    )
}

export default HeadingOne;