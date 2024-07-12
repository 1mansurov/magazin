import React from 'react'
import './Nav.css';
import profile from '../../img/nav.svg'
import navicon from '../../img/navicon.svg'
import karzinka from '../../img/navbasket.svg'

const Nav = () => {
  return (
    <div>
      <div className="nav">
        <div className="nav__language">
            <select className='lang' name="" id="">
                <option  value="">UZ</option>
                <option value="">EN</option>
            </select>
        </div>
        <div className="nav__content">
            <img src={profile} alt="" />
            <img src={navicon} alt="" />
            <img src={karzinka} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Nav
