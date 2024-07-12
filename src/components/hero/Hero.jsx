import React from 'react'
import './Hero.css';
import heroimg from '../../img/hero.png'

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <img className='img' src={heroimg} alt="" />
      </div>
    </div>
  )
}

export default Hero
