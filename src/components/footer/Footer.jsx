import React from 'react'
import './Footer.css';
import nav from '../../img/navicon.svg'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer__wrapper">
            <div className="footer__card">
                <img src={nav} alt="" />
                <span>Lorem Ipsum is simply dummy text of the printing and typesetting in</span>
            </div>
            <div className="footer__card">
                <h4>Follow Us</h4>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae, et?</span>
            </div>
            <div className="footer__card">
                <h4>Contact Us</h4>
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rer</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
