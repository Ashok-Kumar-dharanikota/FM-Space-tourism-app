import React from 'react'

const Title = ({ page, title }) => {
  return (
    <h4 style={{fontFamily: "Barlow Condensed", color: 'white', fontSize: 28, fontWeight: 'normal', textTransform: 'uppercase', letterSpacing: 4.75, marginTop: 150, marginLeft: 150}}><span style={{opacity: '25%', fontWeight: 'bolder'}}>{page}</span> {title}</h4>
  )
}

export default Title